import type { Metadata } from "next";
import { TeamPage } from "../showcase-pages";

export const metadata: Metadata = {
  title: "Ekibimiz | KARA Barber Studio",
  description: "KARA Barber Studio berber ekibiyle tanış.",
};

export default function TeamRoute() {
  return <TeamPage />;
}
