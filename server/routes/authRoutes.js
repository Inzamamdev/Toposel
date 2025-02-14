import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { signupSchema } from "../validation/validationSchema.js";
import { loginSchema } from "../validation/validationSchema.js";
import { signupController } from "../controller/authController.js";
import { loginController } from "../controller/authController.js";
const router = express.Router();

router.post("/user-registration", validate(signupSchema), signupController);
router.post("/user-login", validate(loginSchema), loginController);
export default router;
