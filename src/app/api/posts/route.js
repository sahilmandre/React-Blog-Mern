import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  const POST_PER_PAGE = 2;
  const skip = POST_PER_PAGE * (page - 1);

  const query = {
    take: POST_PER_PAGE,
    skip,
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong please try again" }),
      { status: 500 }
    );
  }
};
