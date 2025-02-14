export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorsArray = result.error.errors.map((err) => err.message);
    return res.status(400).json({ errors: errorsArray });
  }
  next();
};
