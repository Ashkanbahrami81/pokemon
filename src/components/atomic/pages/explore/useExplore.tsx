import { useGetPokemonTypes } from "@/hooks/usePokemon";

const useExplore = () => {
  const {
    data: typesData,
    isLoading: isLoadingTypes,
    isError: isTypesError,
  } = useGetPokemonTypes();

  return { typesData, isLoadingTypes, isTypesError };
};

export default useExplore;
