import { Type } from "@/components/atomic/pages";

type Props = {
  params: { id: string };
};

const page = ({ params }: Props) => {
  return <Type id={Number(params?.id)} />;
};

export default page;
