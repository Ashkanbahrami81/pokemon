"use client";

import { PokemonsList } from "../../organs";
import useType from "./useType";

type TypeProps = {
  id: number;
};
const Type = ({ id }: TypeProps) => {
  const { data, isLoading, isError } = useType({ id });
  console.log(data?.data?.pokemon);
  return (
    <div className="w-full min-h-screen text-white">
      {isLoading ? (
        <div>Loading</div>
      ) : isError ? (
        <div>We ran into some issues</div>
      ) : data && data?.data?.pokemon?.length > 0 ? (
        <PokemonsList pokemons={data?.data?.pokemon} />
      ) : (
        <div>There is no data</div>
      )}
    </div>
  );
};

export default Type;
