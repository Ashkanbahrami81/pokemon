import { useGetPokemonsByType } from "@/hooks/usePokemon";
import React from "react";

type UseTypePageProps = {
  id: number;
};

const useTypePage = ({ id }: UseTypePageProps) => {
  const { data, isLoading, isError } = useGetPokemonsByType({ id });

  return { data, isLoading, isError };
};

export default useTypePage;
