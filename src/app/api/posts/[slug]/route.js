import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get single post
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: { user: true },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong please try again" }),
      { status: 500 }
    );
  }
};
