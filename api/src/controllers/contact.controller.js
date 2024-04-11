import { Contact } from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createContact = asyncHandler(async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  // Check if all required fields are provided
  if (![fullName, email, subject, message].every((field) => field !== undefined)) {
    throw new ApiError(400, "All fields are required");
  }

  // Create a new message in the database
  const newMessage = await Contact.create({
    fullName,
    email,
    subject,
    message,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, newMessage, "Message sent successfully"));
});

const getAllContacts = asyncHandler(async (req, res) => {

    if (!req.user.isAdmin) {
        throw new ApiError(401, "You are not authorized");
    }
    
    // Retrieve all contacts from the database
    const contacts = await Contact.find();
  
    // If there are no contacts, return a 404 error
    if (!contacts || contacts.length === 0) {
      throw new ApiError(404, "No contacts found");
    }
  
    return res
    .status(201)
    .json(new ApiResponse(200, contacts, "Contacts retrieved successfully"));
  });

export { createContact, getAllContacts };
