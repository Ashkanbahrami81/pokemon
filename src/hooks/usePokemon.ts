import { useQuery } from "@tanstack/react-query";

import { queries } from "@/utils/queries";
import { PokemonService } from "@/services";

export const useGetPokemonTypes = () => {
  return useQuery({
    queryKey: [queries.GET_POKEMON_TYPE],
    queryFn: () => PokemonService.getPokemonTypes(),
    retry: false,
    refetchOnWindowFocus: false,
  });
};
