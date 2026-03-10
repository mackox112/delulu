import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-svh flex items-end bg-surface-light">
      <Image
        src="/images/products/alicja_home.jpg"
        alt={t("heroImageAlt")}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0B3652]/90 via-[#0B3652]/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 w-full">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight">
          Delulu Ceramics
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-lg">
          {t("subtitle")}
        </p>
      </div>

      <a
        href="#kolekcja"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors"
        aria-label={t("scrollLabel")}
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
