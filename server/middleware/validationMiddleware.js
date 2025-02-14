import { signupSchema } from "../validation/signUpSchema.js";

export const validateSignup = (req, res, next) => {
  console.log("validate", req.body);
  const result = signupSchema.safeParse(req.body); // This will throw an error if validation fails
  if (!result.success) {
    const errorMessage = result.error.errors.map((err) => err.message);
    return res.status(400).json({ errors: errorMessage });
  }
  next();
};
