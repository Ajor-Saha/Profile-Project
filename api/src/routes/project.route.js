import { Router } from "express";
import { addProject, getProjectByCategory, getProjectById } from "../controllers/project.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/addProject").post(
  upload.fields([
    {
      name: "projectImages",
      maxCount: 5,
    },
  ]),
  verifyJWT,
  addProject
);

router.route("/getProjectByCategory").get(getProjectByCategory);
router.route("/getProjectById/:projectId").get(getProjectById);

export default router;
