"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ProductShowcase from "./ProductShowcase";
import { products } from "@/data/products";

const categoryKeys = ["kubki", "miski", "naczynia"] as const;

export default function CollectionTabs() {
  const [active, setActive] = useState<(typeof categoryKeys)[number]>("kubki");
  const t = useTranslations("categories");

  const items = products.filter((p) => p.category === active);

  return (
    <>
      <div className="flex justify-center gap-2 sm:gap-4 mb-16">
        {categoryKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors ${
              active === key
                ? "bg-accent text-white"
                : "border border-warm-gray/30 text-warm-gray hover:border-accent hover:text-accent"
            }`}
          >
            {t(key)}
          </button>
        ))}
      </div>

      <div className="space-y-24 lg:space-y-32">
        {items.map((product, i) => (
          <ProductShowcase
            key={product.id}
            product={product}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
}
