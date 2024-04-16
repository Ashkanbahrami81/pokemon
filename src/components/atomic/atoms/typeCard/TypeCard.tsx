import Link from "next/link";

import { IPokemonType } from "@/models/IPokemon";
import { extractNumberFromUrl } from "@/utils/extractNumberFromUrl";

const TypeCard = ({ name, url }: IPokemonType) => {
  const typeNumber = extractNumberFromUrl(url);

  return (
    <Link
      href={`type/${typeNumber}`}
      className="w-full flex items-center justify-center p-4 rounded-lg bg-gray-950 hover:bg-gray-900 border border-gray-800 transition-all duration-300 text-gray-300 uppercase"
    >
      {name}
    </Link>
  );
};

export default TypeCard;
