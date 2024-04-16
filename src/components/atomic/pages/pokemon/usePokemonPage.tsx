import { useGetPokemon } from "@/hooks/usePokemon";

type UsePokemonPageProps = {
  id: number;
};

const usePokemonPage = ({ id }: UsePokemonPageProps) => {
  const { data, isLoading, isError } = useGetPokemon({ id });

  return { data, isLoading, isError };
};

export default usePokemonPage;
