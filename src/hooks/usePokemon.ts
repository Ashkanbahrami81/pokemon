import { useQuery } from "@tanstack/react-query";

import { queries } from "@/utils/queries";
import { PokemonService } from "@/services";

export const useGetPokemonTypes = () => {
  return useQuery({
    queryKey: [queries.GET_POKEMON_TYPES],
    queryFn: () => PokemonService.getPokemonTypes(),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetPokemonsByType = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: [queries.GET_POKEMON_BY_TYPE],
    queryFn: () => PokemonService.getPokemonsByType(id),
    retry: false,
    refetchOnWindowFocus: false,
  });
};
