import { Router } from "express";
import { addProject, getProjectByCategory, getProjectById } from "../controllers/project.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import multer from "multer";

const router = Router();

const storage = new multer.memoryStorage();
const uploads = multer({ storage });

router.route("/addProject").post(
  uploads.array("projectImages"),
  verifyJWT,
  addProject
);

router.route("/getProjectByCategory").get(getProjectByCategory);
router.route("/getProjectById/:projectId").get(getProjectById);

export default router;
