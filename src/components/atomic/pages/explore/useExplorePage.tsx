import { useGetPokemonTypes } from "@/hooks/usePokemon";

const useExplorePage = () => {
  const {
    data: typesData,
    isLoading: isLoadingTypes,
    isError: isTypesError,
  } = useGetPokemonTypes();

  return { typesData, isLoadingTypes, isTypesError };
};

export default useExplorePage;
