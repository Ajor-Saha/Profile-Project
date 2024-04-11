import { Router } from "express";
import {
  createContact,
  getAllContacts,
} from "../controllers/contact.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/createContact").post(createContact);
router.route("/getallContacts").get(verifyJWT, getAllContacts);

export default router;
