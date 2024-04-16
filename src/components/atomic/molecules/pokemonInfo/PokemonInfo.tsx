"use client";

import { IPokemon } from "@/models/IPokemon";
import { Button, PokeLabel } from "../../atoms";
import { useState } from "react";

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
  const [Copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (navigator.clipboard && window) {
      try {
        await navigator.clipboard.writeText(window?.location.href || "");
        setCopied(true);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };
  return (
    <div className="mx-auto flex flex-col items-start justify-start gap-3 py-5 px-4">
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
      <div className="flex items-center justify-center gap-2">
        <Button variant={"primary"} onClick={handleCopy}>
          Copy
        </Button>
        {Copied ? <p className="text-green-500 text-xs">Copied</p> : null}
      </div>
    </div>
  );
};

export default PokemonInfo;
