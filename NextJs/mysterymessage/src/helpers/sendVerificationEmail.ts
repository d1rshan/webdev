import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystery message | Verification code',
            react: VerificationEmail({username,otp: verifyCode})
        })
        return {success: true,message: "Verification main sent succesfully"}
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return {success: false,message: "Faied to send verification email"}
    }
}