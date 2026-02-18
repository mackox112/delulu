import { Suspense } from "react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { ProductCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Produkty",
  description:
    "Kolekcja ręcznie robionych kubków, misek i pater ceramicznych Delulu Ceramics.",
};

export default async function ProduktyPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>;
}) {
  const { kategoria } = await searchParams;
  const validCategories: ProductCategory[] = ["kubki", "miski", "patery"];
  const activeCategory = validCategories.includes(kategoria as ProductCategory)
    ? (kategoria as ProductCategory)
    : null;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading subtitle="Ręcznie robiona ceramika">
        Nasza kolekcja
      </SectionHeading>
      <Suspense>
        <CategoryFilter />
      </Suspense>
      <ProductGrid products={filtered} />
    </div>
  );
}
