import { useTranslations } from "next-intl";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <SocialLinks variant="footer" />
        <p className="mt-6 text-sm text-warm-gray">
          &copy; {new Date().getFullYear()} Delulu Ceramics. {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
