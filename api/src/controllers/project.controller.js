import { asyncHandler } from "../utils/asyncHandler.js";
import { Project } from "../models/project.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

const addProject = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    throw new ApiError(401, "You are not authorized");
  }

  const {
    name,
    description,
    category,
    feature,
    frontendStack,
    backendStack,
    sourceCode,
    liveWebsiteLink,
  } = req.body;

  if (
    ![name, description, category, feature, sourceCode, liveWebsiteLink].every(
      (field) => field !== undefined
    )
  ) {
    throw new ApiError(401, "All fields are required");
  }
  
  //console.log(category);
  // Validate category
  const allowedCategories = ["full-stack", "mern-stack", "frontend", "backend"];
  if (!allowedCategories.includes(category)) {
    throw new ApiError(400, "Invalid project category");
  }

  // Handle project images
  const projectImagesLocalPaths = req.files?.projectImages?.map(
    (file) => file.path
  );

  if (!projectImagesLocalPaths || projectImagesLocalPaths.length === 0) {
    throw new ApiError(400, "Project images are required");
  }

  // Upload project images to Cloudinary and get URLs
  const projectImages = await Promise.all(
    projectImagesLocalPaths.map(async (localPath) => {
      const cloudinaryResponse = await uploadOnCloudinary(localPath);
      return cloudinaryResponse ? cloudinaryResponse.secure_url : null;
    })
  );

  if (projectImages.some((image) => !image)) {
    throw new ApiError(400, "Failed to upload one or more project images");
  }

  // Add project to database
  const newProject = await Project.create({
    name,
    description,
    projectImages,
    category,
    feature,
    frontendStack,
    backendStack,
    sourceCode,
    liveWebsiteLink,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, newProject, "Project added successfully"));
});

const getProjectByCategory = asyncHandler(async (req, res) => {
  const { category } = req.query;

  // Validate category
  const allowedCategories = ["full-stack", "mern-stack", "frontend", "backend"];
  if (!allowedCategories.includes(category)) {
    throw new ApiError(400, "Invalid project category");
  }

  // Fetch projects based on category
  let projects;
  if (category === 'full-stack') {
    // Combine projects from full-stack and mern-stack categories
    projects = await Project.find({ $or: [{ category: 'full-stack' }, { category: 'mern-stack' }] });
  } else {
    // Fetch projects based on the specified category
    projects = await Project.find({ category });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, projects, "Projects fetched successfully"));
});

const getProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  // Validate projectId
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    throw new ApiError(400, "Invalid project ID");
  }

  // Fetch project by ID
  const project = await Project.findById({ _id:projectId });

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, project, "Project fetched successfully"));
});


export { addProject, getProjectByCategory, getProjectById };
