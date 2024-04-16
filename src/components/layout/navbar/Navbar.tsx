import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full h-14 md:h-16 flex items-center justify-between bg-black border-b border-b-gray-950 text-white px-4">
      <Link href={"/"} className="font-extrabold text-2xl text-green-500">
        Pokemonia
      </Link>
    </div>
  );
};

export default Navbar;
