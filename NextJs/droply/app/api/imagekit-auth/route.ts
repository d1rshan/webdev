import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import ImageKit from "imagekit";

// Initialize ImageKit with your credentials
// this route will give u auth params for image kit and all the functions are in frontend only (for imagekit)
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
});

export async function GET() {
  try {
    // Check authentication - now we are not checking in middleware coz thats a vulnerability but it is okay to do in both (middleware and here)
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get authentication parameters from ImageKit
    const authParams = imagekit.getAuthenticationParameters();

    return NextResponse.json(authParams);
  } catch (error) {
    console.error("Error generating ImageKit auth params:", error);
    return NextResponse.json(
      { error: "Failed to generate authentication parameters" },
      { status: 500 }
    );
  }
}