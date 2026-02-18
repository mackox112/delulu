import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-charcoal">
        Strona nie znaleziona
      </h2>
      <p className="mt-4 text-warm-gray">
        Przepraszamy, ta strona nie istnieje.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
}
