import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get all comment
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong please try again" }),
      { status: 500 }
    );
  }
};
