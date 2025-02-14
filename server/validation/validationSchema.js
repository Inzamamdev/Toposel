import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, { message: "Name is required" }).max(20),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  gender: z.enum(["Male", "Female", "Other"]),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in YYYY-MM-DD format"),
  country: z.string().min(2, "Country name is required"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});
