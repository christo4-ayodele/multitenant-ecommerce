import z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .max(63, "Username must be leass than 63 chars long.")
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "Username can only contain lowercase letters, numbers, and hyphens, and must start and end with a letter or number."
    )
    .refine(
      (val) => !val.includes("--"),
      "Username cannot contain consecutive hyphens."
    )
    .transform((val) => val.toLowerCase()),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
