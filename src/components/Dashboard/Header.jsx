"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
    const router = useRouter()
    const handleback = ()=> {
        event.preventDefault()
        router.back()
    }

  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-2xl text-color-primary" onClick={handleback}>
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">My Collection</h3>
    </div>
  );
};

export default Header;
