import dynamic from "next/dynamic";

import { IStat } from "@/models/IPokemon";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PokemonChart = ({ stats }: { stats: any }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      background: "transparent",
      foreColor: "#fff",
      width: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
    },
    yaxis: {
      title: {
        text: "Values",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };

  const series = [
    {
      name: "Pokemon Stats",
      data: stats?.map((stat: IStat) => stat?.base_stat) || [],
      color: "rgb(26, 254, 73)",
    },
  ];
  return (
    <>
      {stats?.length > 0 ? (
        <Chart
          options={chartOptions}
          series={series}
          type="bar"
          height={350}
          width={"100%"}
        />
      ) : null}
    </>
  );
};

export default PokemonChart;
