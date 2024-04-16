import { Metadata } from "next";

import { Explore } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Pokemon",
};

export default function Home() {
  return <Explore />;
}
