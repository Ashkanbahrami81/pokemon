"use client";

import { PokemonsList } from "../../organs";
import useType from "./useType";

type TypePageProps = {
  id: number;
};
const TypePage = ({ id }: TypePageProps) => {
  const { data, isLoading, isError } = useType({ id });
  console.log(data?.data?.pokemon);
  return (
    <main className="max-w-7xl w-full mx-auto flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      {isLoading ? (
        <div>Loading</div>
      ) : isError ? (
        <div>We ran into some issues</div>
      ) : data && data?.data?.pokemon?.length > 0 ? (
        <PokemonsList pokemons={data?.data?.pokemon} />
      ) : (
        <div>There is no data</div>
      )}
    </main>
  );
};

export default TypePage;
