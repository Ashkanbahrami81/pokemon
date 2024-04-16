"use client";

import usePokemonPage from "./usePokemonPage";
import { Loader, PokemonChart } from "../../atoms";
import { PokemonDetails } from "../../organs";

type PokemonPageProps = {
  id: number | string;
};

const PokemonPage = ({ id }: PokemonPageProps) => {
  const { data, isLoading, isError } = usePokemonPage({ id });

  return (
    <main className="max-w-7xl w-full mx-auto flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      {isLoading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : isError ? (
        <div>We ran into some issues</div>
      ) : data?.data ? (
        <div className="w-full flex flex-col items-center justify-start gap-3">
          <PokemonDetails
            name={data?.data?.name}
            sprites={data?.data?.sprites}
            abilities={data?.data?.abilities}
            types={data?.data?.types}
            base_experience={data?.data?.base_experience}
            height={data?.data?.height}
            weight={data?.data?.weight}
          />
          <div className="w-full">
            <PokemonChart stats={data?.data?.stats} />
          </div>
        </div>
      ) : (
        <div>There is no data</div>
      )}
    </main>
  );
};

export default PokemonPage;
