import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Ceramika tworzona
            <span className="text-accent"> z duszą</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-warm-gray leading-relaxed">
            Ręcznie toczone kubki, miski i patery. Każde naczynie jest unikalne
            — stworzone z miłością do rzemiosła i detalu.
          </p>
          <Link
            href="/produkty"
            className="inline-block mt-8 px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors"
          >
            Zobacz kolekcję
          </Link>
        </div>
      </div>
    </section>
  );
}
