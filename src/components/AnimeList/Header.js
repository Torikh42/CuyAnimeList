import Link from "next/link";

const Header = ({ title, linkHref, linkTtile }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary"> {title} </h1>
      {linkHref && linkTtile ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all"
        >
          {linkTtile}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
