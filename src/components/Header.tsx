import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { labelKey: "collection" as const, href: "/kolekcja" as const },
  { labelKey: "about" as const, href: "/o-nas" as const },
  { labelKey: "contact" as const, href: "/kontakt" as const },
];

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-[#0B3652]/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/kes sey 2.PNG"
            alt="Delulu Ceramics"
            width={120}
            height={40}
            className="h-10 w-auto rounded-lg"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-warm-gray hover:text-accent transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
