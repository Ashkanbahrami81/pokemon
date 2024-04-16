"use client";

import { Loader } from "../../atoms";
import { PokemonsList } from "../../organs";
import useType from "./useTypePage";

type TypePageProps = {
  id: number;
};
const TypePage = ({ id }: TypePageProps) => {
  const { data, isLoading, isError } = useType({ id });
  return (
    <main className="max-w-7xl w-full mx-auto flex min-h-screen flex-col items-center justify-between gap-8 p-4 md:p-8">
      <h1 className="text-gray-500 font-extrabold text-xl">Pokemons</h1>
      {isLoading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <Loader />
        </div>
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
