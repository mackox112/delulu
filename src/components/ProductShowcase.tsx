"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Product } from "@/lib/types";
import ContactModal from "./ContactModal";

export default function ProductShowcase({
  product,
  reverse,
}: {
  product: Product;
  reverse?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());
  const t = useTranslations();

  const productName = t(`products.${product.id}.name`);
  const productDescription = t(`products.${product.id}.description`);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    },
    [activeIndex, isTransitioning]
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % product.images.length);
  }, [activeIndex, product.images.length, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + product.images.length) % product.images.length);
  }, [activeIndex, product.images.length, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    if (product.images.length <= 1) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, product.images.length]);

  function handleImgError(index: number) {
    setImgErrors((prev) => new Set(prev).add(index));
  }

  return (
    <>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          reverse ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Gallery */}
        <div className={`space-y-4 ${reverse ? "lg:order-2" : ""}`}>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-light relative group">
            {imgErrors.has(activeIndex) ? (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-warm-gray/40 text-sm">{productName}</span>
              </div>
            ) : (
              <Image
                key={activeIndex}
                src={product.images[activeIndex].src}
                alt={t(`products.${product.id}.images.${activeIndex}`)}
                width={800}
                height={1000}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => handleImgError(activeIndex)}
              />
            )}

            {/* Prev / Next arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={t("product.prevPhoto")}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={t("product.nextPhoto")}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeIndex
                          ? "bg-white w-6"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={t("product.photoN", { number: i + 1 })}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    i === activeIndex
                      ? "border-accent"
                      : "border-transparent hover:border-warm-gray/30"
                  }`}
                >
                  {imgErrors.has(i) ? (
                    <div className="w-full h-full bg-surface-light" />
                  ) : (
                    <Image
                      src={img.src}
                      alt={t(`products.${product.id}.images.${i}`)}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={() => handleImgError(i)}
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={`flex flex-col justify-center ${reverse ? "lg:order-1" : ""}`}>
          <h3 className="text-3xl sm:text-4xl font-bold text-charcoal">
            {productName}
          </h3>
          <p className="mt-6 text-lg text-warm-gray leading-relaxed">
            {productDescription}
          </p>
          <p className="mt-4 text-sm text-warm-gray/70 italic">
            {t("product.priceNote")}
          </p>
          <button
            onClick={() => setShowContact(true)}
            className="mt-8 self-start px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors"
          >
            {t("product.orderButton")}
          </button>
        </div>
      </div>

      <ContactModal
        productName={productName}
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </>
  );
}
