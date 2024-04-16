import { IPokemonType } from "@/models/IPokemon";
import { PokemonCard } from "../../atoms";

type PokemonsListProps = {
  pokemons: { pokemon: IPokemonType }[];
};
const PokemonsList = ({ pokemons }: PokemonsListProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
      {pokemons?.map((pokemon) => (
        <PokemonCard
          key={pokemon.pokemon.url}
          name={pokemon.pokemon.name}
          url={pokemon.pokemon.url}
        />
      ))}
    </div>
  );
};

export default PokemonsList;
