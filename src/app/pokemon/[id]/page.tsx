import { PokemonPage } from "@/components/atomic/pages";

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return <PokemonPage id={Number(params?.id)} />;
};

export default page;
