// we only write the controllers in next
// as route is already taken care of for eg: this file is for route /api/sign-up
// and yes for all routes which uses db we import connectDB and call it

import connectDB from "@/lib/dbConnect";



import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import UserModel from "@/models/User";
import { success } from "zod/v4";
import bcrypt from "bcryptjs";


export async function POST(request: Request){
    await connectDB()
    try {
       const {username,email,password} = await request.json()
       const existingUserVerifiedByUsername = await UserModel.findOne({username, isVerified: true})

       if (existingUserVerifiedByUsername){
        return Response.json({
            success: false,
            message: "Username is already taken"
        },{status: 400})
       }
        
       const existingUserVerifiedByEmail = await UserModel.findOne({email})
       if (existingUserVerifiedByEmail){
            true
       } else{
        const hashedPassword = await bcrypt.hash(password,10)
       }
    } catch (error) {
        console.error("Error registering user",error) // will be shown to terminal
        return Response.json( // will be sent to frontend
            {
                success: false,
                message: "Error registering user"
            },
            {
                status: 500
            }
        )
    }
}