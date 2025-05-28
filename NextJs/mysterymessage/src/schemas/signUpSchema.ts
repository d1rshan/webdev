// mongoose schemas are written to provide structure in mongodb document
// these schemas are written to provide structure for specific tasks inside the app (ie to validate)
// yes we put validation in mongoose too, but it is for complete User (or so for any other model) but not for specific tasks
// we use library called ZOD for validation 
// to validate before even going to mongoose ig

import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast 2 characters")
    .max(20,"Userrname must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain speecial character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address" }),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})
})