import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    const { comment, user_email, anime_mal_id, username, anime_title } =
      await request.json();
    // Validasi input
    if (!comment || !user_email || !anime_mal_id || !username || !anime_title) {
      return Response.json({
        success: false,
        isCreated: false,
        message: "all fields are required",
        status: 400,
      });
    }

    // Buat komentar baru
    const data = { comment, user_email, anime_mal_id, username, anime_title };
    const createComment = await prisma.comment.create({ data });
    if (createComment) {
      return Response.json({
        success: true,
        isCreated: true,
        message: "Comment successfully created",
        data: createComment,
        status: 200,
      });
    } else {
      return Response.json({
        success: false,
        isCreated: false,
        message: "Failed to create comment",
        status: 500,
      });
    }
  } catch (error) {
    console.error("Comment API Error:", error);
    return Response.json({
      success: false,
      isCreated: false,
      message: "Internal server error",
      error: error.message,
      status: 500,
    });
  }
}
