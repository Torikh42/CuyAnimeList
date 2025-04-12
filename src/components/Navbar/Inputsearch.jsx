"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword.trim() !== "") {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <form className="relative" onSubmit={handleSearch}>
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
      />
      <button
        type="submit"
        className="absolute top-2 end-2"
        aria-label="Cari Anime"
      >
        <MagnifyingGlass size={24} />
      </button>
    </form>
  );
};

export default InputSearch;
