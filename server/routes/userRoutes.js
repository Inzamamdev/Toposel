import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { searchUserController } from "../controller/userController.js";
const router = express.Router();

router.post("/search-user", authMiddleware, searchUserController);

export default router;
