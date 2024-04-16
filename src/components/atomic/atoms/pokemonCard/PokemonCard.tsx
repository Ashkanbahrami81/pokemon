import { extractNumberFromUrl } from "@/utils/extractNumberFromUrl";
import Link from "next/link";

type IPokemonCardProps = { name: string; url?: string };

const PokemonCard = ({ name, url }: IPokemonCardProps) => {
  const pokemonNumber = url ? extractNumberFromUrl(url) : name;

  return (
    <Link
      href={`/pokemon/${pokemonNumber}`}
      className="w-full flex items-center justify-center p-4 rounded-lg bg-gray-950 hover:bg-gray-900 border border-gray-800 transition-all duration-300 text-gray-300 uppercase"
    >
      {name}
    </Link>
  );
};

export default PokemonCard;
