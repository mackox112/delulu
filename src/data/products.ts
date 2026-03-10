import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "kubek-kraken",
    category: "kubki",
    featured: true,
    images: [
      { src: "/images/products/kubek_kraken.png" },
      { src: "/images/products/kubek_kraken_2.png" },
      { src: "/images/products/kubek_kraken_3.png" },
      { src: "/images/products/kubek_kraken_4.png" },
      { src: "/images/products/img_0740.jpg" },
    ],
  },
  {
    id: "kubki-piaskowe",
    category: "kubki",
    images: [
      { src: "/images/products/kubki.jpg" },
      { src: "/images/products/kubki_2.jpg" },
      { src: "/images/products/kubki_3.jpg" },
      { src: "/images/products/kubki_4.jpg" },
    ],
  },
  {
    id: "czarki",
    category: "kubki",
    images: [
      { src: "/images/products/czarki.jpg" },
      { src: "/images/products/czarki_2.jpg" },
      { src: "/images/products/kubki_serduszka.jpg" },
      { src: "/images/products/kubki_to_go.jpg" },
    ],
  },
  {
    id: "miski-oceaniczne",
    category: "miski",
    featured: true,
    images: [
      { src: "/images/products/miski.jpg" },
      { src: "/images/products/miski_2.jpg" },
    ],
  },
  {
    id: "miski-piaskowe",
    category: "miski",
    images: [
      { src: "/images/products/miski_3.jpg" },
      { src: "/images/products/miski_4.jpg" },
      { src: "/images/products/miski_5.jpg" },
      { src: "/images/products/miski_6.jpg" },
    ],
  },
  {
    id: "patera-rafa",
    category: "naczynia",
    images: [
      { src: "/images/products/patera.jpg" },
      { src: "/images/products/patera_2.jpg" },
      { src: "/images/products/patera_3.jpg" },
      { src: "/images/products/patera_4.jpg" },
    ],
  },
  {
    id: "naczynie-na-tapas",
    category: "miski",
    images: [
      { src: "/images/products/naczynie_na_tapas.jpg" },
      { src: "/images/products/naczynie_na_tapas_2.jpg" },
      { src: "/images/products/naczynie_na_tapas_3.jpg" },
    ],
  },
];
