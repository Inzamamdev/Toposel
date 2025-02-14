import express from "express";
import { validateSignup } from "../middleware/validationMiddleware.js";
import { signupController } from "../controller/authController.js";
const router = express.Router();

router.post("/user-registration", validateSignup, signupController);

export default router;
