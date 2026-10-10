import type { Metadata } from "next";
import { PricingPage } from "../showcase-pages";

export const metadata: Metadata = {
  title: "Fiyatlarımız | KARA Barber Studio",
  description:
    "KARA Barber Studio hizmetleri, süreleri ve güncel demo fiyatlarını incele.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
