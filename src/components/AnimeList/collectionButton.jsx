"use client";
// This is a client component

import React, { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email, anime_title, anime_image }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCollection = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");
    
    try {
      const data = { anime_mal_id, user_email, anime_image, anime_title };
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      console.log("API Response:", result);
      
      if (result.success) {
        setIsCreated(result.isCreated);
        setMessage(result.message);
      } else {
        setMessage(result.message || "Terjadi kesalahan");
      }
    } catch (error) {
      console.error("Error adding to collection:", error);
      setMessage("Terjadi kesalahan koneksi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">✅ Berhasil Ditambahkan</p>
      ) : (
        <button
          onClick={handleCollection}
          disabled={isLoading}
          className="px-2 py-1 bg-color-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Add To Collection"}
        </button>
      )}
      
      {/* Tampilkan pesan jika ada */}
      {message && !isCreated && (
        <p className="text-red-500 text-sm mt-1">{message}</p>
      )}
    </>
  );
};

export default CollectionButton;