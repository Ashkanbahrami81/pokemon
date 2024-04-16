import { PokemonPage } from "@/components/atomic/pages";

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return <PokemonPage id={params?.id} />;
};

export default page;
