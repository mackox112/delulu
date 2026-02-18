"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group">
      <div className="aspect-square overflow-hidden rounded-2xl bg-surface-light relative">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-accent/40 text-sm font-medium">{product.name}</span>
          </div>
        ) : (
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            width={600}
            height={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-charcoal">{product.name}</h3>
        <p className="mt-1 text-sm text-warm-gray">{product.description}</p>
        {product.price && (
          <p className="mt-2 text-sm font-medium text-accent">{product.price}</p>
        )}
      </div>
    </article>
  );
}
