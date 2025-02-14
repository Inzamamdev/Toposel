import express from "express";
import dotenv from "dotenv";
import connectDb from "./database.js";
import authRouter from "./routes/authRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
connectDb()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

app.use("/api/auth", authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
