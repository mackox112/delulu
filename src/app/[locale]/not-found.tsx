import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-charcoal">
        {t("heading")}
      </h2>
      <p className="mt-4 text-warm-gray">
        {t("text")}
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
