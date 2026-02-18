"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ProductCategory } from "@/lib/types";

const categories: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "Wszystkie" },
  { key: "kubki", label: "Kubki" },
  { key: "miski", label: "Miski" },
  { key: "patery", label: "Patery" },
];

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const current = searchParams.get("kategoria") || "all";

  function handleFilter(key: string) {
    if (key === "all") {
      router.push("/produkty", { scroll: false });
    } else {
      router.push(`/produkty?kategoria=${key}`, { scroll: false });
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleFilter(cat.key)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            current === cat.key
              ? "bg-accent text-white"
              : "bg-surface-light text-warm-gray hover:bg-accent-light hover:text-accent"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
