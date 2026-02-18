import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              O Delulu Ceramics
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-accent" />
            <p className="mt-6 text-lg text-warm-gray leading-relaxed">
              Każde naczynie, które tworzymy, jest unikalne. Powstaje w małym
              warsztacie, z naturalnych materiałów i z pasją do rzemiosła.
              Wierzymy, że piękne przedmioty codziennego użytku sprawiają, że
              życie staje się przyjemniejsze.
            </p>
            <Link
              href="/o-nas"
              className="inline-block mt-8 text-accent font-medium hover:text-accent-dark transition-colors"
            >
              Poznaj naszą historię &rarr;
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProducts />
    </>
  );
}
