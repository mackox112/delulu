import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en", "es", "it"],
  defaultLocale: "pl",
  pathnames: {
    "/": "/",
    "/kolekcja": {
      pl: "/kolekcja",
      en: "/collection",
      es: "/coleccion",
      it: "/collezione",
    },
    "/o-nas": {
      pl: "/o-nas",
      en: "/about",
      es: "/sobre-nosotros",
      it: "/chi-siamo",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
      es: "/contacto",
      it: "/contatto",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
