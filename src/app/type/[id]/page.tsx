import { TypePage } from "@/components/atomic/pages";

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return <TypePage id={Number(params?.id)} />;
};

export default page;
