import Image from "next/image";

import { IPokemon } from "@/models/IPokemon";
import { PokemonInfo } from "../../molecules";

type PokemonDetailsProps = Pick<
  IPokemon,
  | "name"
  | "sprites"
  | "types"
  | "base_experience"
  | "height"
  | "weight"
  | "types"
  | "abilities"
>;

const PokemonDetails = ({
  name,
  sprites,
  types,
  abilities,
  base_experience,
  height,
  weight,
}: PokemonDetailsProps) => {
  return (
    <div className="w-full flex items-center justify-center gap-3 bg-gray-950 border border-gray-500 rounded-3xl">
      <Image
        src={sprites.front_default}
        alt={name}
        width={400}
        height={400}
        style={{
          imageRendering: "pixelated", // This will make the image sharper
        }}
        className="w-1/2 max-w-[400px]"
      />
      <PokemonInfo
        name={name}
        abilities={abilities}
        types={types}
        base_experience={base_experience}
        height={height}
        weight={weight}
      />
    </div>
  );
};

export default PokemonDetails;
