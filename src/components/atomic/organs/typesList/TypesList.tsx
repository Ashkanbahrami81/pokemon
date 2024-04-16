import { TypeCard } from "../../atoms";
import { IPokemonType } from "@/models/IPokemon";

const TypesList = ({ types }: { types: IPokemonType[] }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
      {types?.map((type) => (
        <TypeCard key={type.url} {...type} />
      ))}
    </div>
  );
};

export default TypesList;
