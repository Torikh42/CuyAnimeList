import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

export const page = async () => {
  const user = await authUserSession();

  return (
    <div className=" mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">WELCOME, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />

      <div className="flex flex-wrap gap-4 py-8 ">
        <Link
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
          href="/users/dashboard/collection"
        >
          My Collection
        </Link>
        <Link
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
          href="/users/dashboard/comment"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default page;
