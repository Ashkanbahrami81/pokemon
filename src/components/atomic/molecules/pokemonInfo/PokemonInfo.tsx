import { IPokemon } from "@/models/IPokemon";
import React from "react";
import { PokeLabel } from "../../atoms";

type PokemonInfoProps = Pick<
  IPokemon,
  "name" | "base_experience" | "height" | "weight" | "types" | "abilities"
>;

const PokemonInfo = ({
  types,
  abilities,
  name,
  base_experience,
  height,
  weight,
}: PokemonInfoProps) => {
  return (
    <div className="mx-auto flex flex-col items-start justify-center gap-3">
      <h2 className="text-xl md:text-2xl font-bold text-gray-200 capitalize">
        {name}
      </h2>
      <div className="w-full flex flex-col items-start justify-center gap-1">
        <p className="text-sm md:text-lg text-gray-400">
          <span className="text-gray-300">Type:</span>{" "}
          {types?.map((type) => type.type.name).join(", ")}
        </p>
        <p className="text-sm md:text-lg text-gray-400">
          <span className="text-gray-300">Abilities:</span>{" "}
          {abilities?.map((ability) => ability.ability.name).join(", ")}
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <PokeLabel title="Experience" value={base_experience} />
        <PokeLabel title="Height" value={height} />
        <PokeLabel title="Weight" value={weight} />
      </div>
    </div>
  );
};

export default PokemonInfo;
