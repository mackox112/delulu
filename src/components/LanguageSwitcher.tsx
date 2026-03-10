"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeFlags: Record<string, string> = {
  pl: "🇵🇱",
  en: "🇬🇧",
  es: "🇪🇸",
  it: "🇮🇹",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(newLocale: string) {
    router.replace({ pathname }, { locale: newLocale });
  }

  return (
    <div className="flex gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => onChange(loc)}
          className={`px-2 py-1 text-xs rounded transition-colors ${
            loc === locale
              ? "text-accent font-bold"
              : "text-warm-gray hover:text-white"
          }`}
        >
          {localeFlags[loc]}
        </button>
      ))}
    </div>
  );
}
