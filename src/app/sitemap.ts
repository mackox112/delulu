import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const pathnames: Record<string, Record<string, string>> = {
  "/": { pl: "/pl", en: "/en", es: "/es", it: "/it" },
  "/kolekcja": {
    pl: "/pl/kolekcja",
    en: "/en/collection",
    es: "/es/coleccion",
    it: "/it/collezione",
  },
  "/o-nas": {
    pl: "/pl/o-nas",
    en: "/en/about",
    es: "/es/sobre-nosotros",
    it: "/it/chi-siamo",
  },
  "/kontakt": {
    pl: "/pl/kontakt",
    en: "/en/contact",
    es: "/es/contacto",
    it: "/it/contatto",
  },
};

const priorities: Record<string, number> = {
  "/": 1,
  "/kolekcja": 0.8,
  "/o-nas": 0.7,
  "/kontakt": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [path, localePaths] of Object.entries(pathnames)) {
    for (const locale of routing.locales) {
      const localePath = localePaths[locale];
      entries.push({
        url: `${SITE_URL}${localePath}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: priorities[path],
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${SITE_URL}${localePaths[l]}`])
          ),
        },
      });
    }
  }

  return entries;
}
