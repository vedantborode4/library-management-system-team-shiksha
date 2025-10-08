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

export const addBookSchema = z.object({
    isbn: z
        .string()
        .min(10, "ISBN must be at least 10 characters"),

    title: z
        .string()
        .min(1, "Title is required"),

    author: z
        .string()
        .optional(),

    price: z
        .number()
        .positive("Price must be a positive number"),

    category: z
        .string()
        .min(3),

    totalCopies: z
        .number()
        .int()
        .min(1)
        .max(100)
        .optional(),

    condition: z
        .enum(["good", "new", "fair", "poor"])
        .optional()
})

export const removeBookSchema = z.object({
    isbn: z
        .string()
        .min(10, "ISBN is required"),
});

export const modifyBookSchema = z.object({
    isbn: z
        .string()
        .min(10, "ISBN is required"),

    title: z
        .string()
        .optional(),

    author: z
        .string()
        .optional(),

    price: z
        .number()
        .positive()
        .optional(),

    category: z
        .string()
        .uuid("Invalid category ID")
        .optional(),

    condition: z
        .enum(["good", "new", "fair", "poor"])
        .optional(),

    totalCopies: z
        .number()
        .int()
        .min(1)
        .max(100)
        .optional(),
})