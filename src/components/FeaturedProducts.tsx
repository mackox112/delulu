import Link from "next/link";
import { products } from "@/data/products";
import SectionHeading from "./SectionHeading";
import ProductGrid from "./ProductGrid";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading subtitle="Nasze najlepsze prace">
        Wyróżnione produkty
      </SectionHeading>
      <ProductGrid products={featured} />
      <div className="mt-12 text-center">
        <Link
          href="/produkty"
          className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
        >
          Zobacz wszystkie produkty
        </Link>
      </div>
    </section>
  );
}
