"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, username, user_email, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const data = { anime_mal_id, user_email, comment, username, anime_title };
      const response = await fetch("/api/v1/comment", {
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
        setComment("");
        router.refresh();
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
    <div className="flex flex-col gap-2">
      {isCreated && (
        <p className="text-color-primary">✅ Berhasil Ditambahkan</p>
      )}
      {message && <p>{message}</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 text-xl p-4 "
        disabled={isLoading}
      />
      <button
        onClick={handlePosting}
        className="w-52 px-3 py-2 bg-color-accent"
        disabled={isLoading}
      >
        {isLoading ? "Mengirim..." : "Posting Komentar"}
      </button>
    </div>
  );
};

export default CommentInput;
