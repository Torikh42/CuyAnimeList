import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    const { anime_mal_id, user_email, anime_title, anime_image } = await request.json();
    
    // Validasi input
    if (!anime_mal_id || !user_email) {
      return Response.json({ 
        success: false,
        isCreated: false, 
        message: "anime_mal_id and user_email are required",
        status: 400 
      });
    }

    // Cek apakah sudah ada di collection
    const existingCollection = await prisma.collection.findFirst({
      where: {
        anime_mal_id: anime_mal_id,
        user_email: user_email
      }
    });

    if (existingCollection) {
      return Response.json({ 
        success: true,
        isCreated: false, 
        message: "Already in collection",
        status: 200 
      });
    }

    // Buat collection baru
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const createCollection = await prisma.collection.create({ data });
    
    if (createCollection) {
      return Response.json({ 
        success: true,
        isCreated: true, 
        message: "Successfully added to collection",
        data: createCollection,
        status: 200 
      });
    } else {
      return Response.json({ 
        success: false,
        isCreated: false, 
        message: "Failed to create collection",
        status: 500 
      });
    }
  } catch (error) {
    console.error("Collection API Error:", error);
    return Response.json({ 
      success: false,
      isCreated: false, 
      message: "Internal server error",
      error: error.message,
      status: 500 
    });
  }
}