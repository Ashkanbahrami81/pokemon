type PokeLabelProps = {
  title: string;
  value: number;
};
const PokeLabel = ({ title, value }: PokeLabelProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <p className="text-xs md:text-base text-gray-400">{title}</p>
      <p className="text-sm md:text-lg text-gray-200">{value}</p>
    </div>
  );
};

export default PokeLabel;
