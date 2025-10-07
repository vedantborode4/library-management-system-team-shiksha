import z from "zod"

export const userSignupSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(24, "First name must be at most 24 characters"),

    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(24, "Last name must be at most 24 characters"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(52, "Password must be at most 52 characters")
        .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),

    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(52, "Username must be at most 52 characters"),
});

export const userSigninSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(52, "Username must be at most 52 characters"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(52, "Password must be at most 52 characters")
        .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
})