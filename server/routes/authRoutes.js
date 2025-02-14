import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { signupSchema } from "../validation/signUpSchema.js";
import { signupController } from "../controller/authController.js";
const router = express.Router();

router.post("/user-registration", validate(signupSchema), signupController);
// router.post("/user-login", va);
export default router;
