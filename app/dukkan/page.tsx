import type { Metadata } from "next";
import { ShopPage } from "../showcase-pages";

export const metadata: Metadata = {
  title: "Dükkanımız | KARA Barber Studio",
  description: "Kadıköy'deki KARA Barber Studio'dan fotoğraflar ve ziyaret bilgileri.",
};

export default function ShopRoute() {
  return <ShopPage />;
}
