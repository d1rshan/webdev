import {z} from 'zod'


export const signInSchema = z.object({
    identifier: z.string(), // for username
    password: z.string(),
})