import { useGetPokemonsByType } from "@/hooks/usePokemon";
import React from "react";

type TypeProps = {
  id: number;
};

const useType = ({ id }: TypeProps) => {
  const { data, isLoading, isError } = useGetPokemonsByType({ id });

  return { data, isLoading, isError };
};

export default useType;
