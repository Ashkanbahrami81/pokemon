import { extractNumberFromUrl } from "@/utils/extractNumberFromUrl";
import Image from "next/image";
import Link from "next/link";

type IPokemonCardProps = { name: string; url?: string; noImage?: boolean };

const PokemonCard = ({ name, url, noImage }: IPokemonCardProps) => {
  const pokemonNumber = url ? extractNumberFromUrl(url) : name;

  return (
    <Link
      href={`/pokemon/${pokemonNumber}`}
      className="w-full flex flex-col items-center justify-center p-4 rounded-lg bg-gray-950 hover:bg-gray-900 border border-gray-800 transition-all duration-300 text-gray-300 uppercase"
    >
      {!noImage ? (
        <Image
          alt={name}
          width={200}
          height={200}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
          style={{
            imageRendering: "pixelated", // This will make the image sharper
          }}
        />
      ) : null}
      {name}
    </Link>
  );
};

export default PokemonCard;
