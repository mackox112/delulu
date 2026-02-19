import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "kubek-kraken",
    name: "Kubek Kraken",
    description:
      "Ręcznie toczony kubek z rzeźbionymi mackami krakena oplatającymi naczynie. Każdy egzemplarz jest unikalny — szkliwiony w głębokich odcieniach morza, od fioletu po ciemny błękit. Macki formowane ręcznie, jedna po drugiej.",
    category: "kubki",
    featured: true,
    images: [
      { src: "/images/products/kubek_kraken.png", alt: "Kubek Kraken — widok z bliska na macki i szkliwa" },
      { src: "/images/products/kubek_kraken_2.png", alt: "Kubek Kraken — ujęcie z boku na tle śniegu" },
      { src: "/images/products/kubek_kraken_3.png", alt: "Kubek Kraken — detale szkliwienia i macek" },
      { src: "/images/products/kubek_kraken_4.png", alt: "Kubek Kraken — zbliżenie na przyssawki" },
      { src: "/images/products/img_0740.jpg", alt: "Kubek Kraken — na kamieniu nad morzem" },
    ],
  },
  {
    id: "kubki-piaskowe",
    name: "Kubki Piaskowe",
    description:
      "Kubki w ciepłych, piaskowych odcieniach z błękitnym wnętrzem — jak plaża spotykająca ocean. Nakrapiana faktura na zewnątrz, głęboki błękit w środku. Wygodny uchwyt i pojemność idealna na poranną kawę.",
    category: "kubki",
    images: [
      { src: "/images/products/kubki.jpg", alt: "Kubek Piaskowy — widok wnętrza z błękitnym szkliwem" },
      { src: "/images/products/kubki_2.jpg", alt: "Kubki Piaskowe — para kubków w dłoni" },
      { src: "/images/products/kubki_3.jpg", alt: "Kubki Piaskowe — widok z góry na błękitne wnętrza" },
      { src: "/images/products/kubki_4.jpg", alt: "Kubki Piaskowe — detale piaskowej faktury" },
    ],
  },
  {
    id: "czarki",
    name: "Czarki",
    description:
      "Kolekcja małych naczyń bez ucha — czarki, kubki serduszka i kubeczki to go. Wielokolorowe szkliwa, romantyczne kształty i ceramiczne wersje kubków podróżnych. Styl wabi-sabi, gdzie niedoskonałość jest pięknem.",
    category: "kubki",
    images: [
      { src: "/images/products/czarki.jpg", alt: "Czarki — para czarek z błękitnym wnętrzem" },
      { src: "/images/products/czarki_2.jpg", alt: "Czarki — widok z boku na wielokolorowe szkliwo" },
      { src: "/images/products/kubki_serduszka.jpg", alt: "Czarki — kubki serduszka w kształcie serca" },
      { src: "/images/products/kubki_to_go.jpg", alt: "Czarki — ceramiczne kubeczki to go" },
    ],
  },
  {
    id: "miski-oceaniczne",
    name: "Miski Oceaniczne",
    description:
      "Ręcznie toczone miski inspirowane głębią oceanu. Szkliwione w odcieniach błękitu i turkusu, z organicznymi kształtami przypominającymi morskie skały. Idealne do serwowania sałatek czy ulubionej zupy.",
    category: "miski",
    featured: true,
    images: [
      { src: "/images/products/miski.jpg", alt: "Miski Oceaniczne — zestaw misek w odcieniach błękitu" },
      { src: "/images/products/miski_2.jpg", alt: "Miski Oceaniczne — detale szkliwienia i faktura" },
    ],
  },
  {
    id: "miski-piaskowe",
    name: "Miski Piaskowe",
    description:
      "Miski w piaskowych odcieniach z abstrakcyjnymi, pędzlowymi wzorami w ciemnym szkliwie. Każdy swirl jest inny — malowany ręcznie jednym ruchem pędzla. Zestaw trzech misek o różnych rozmiarach.",
    category: "miski",
    images: [
      { src: "/images/products/miski_3.jpg", alt: "Miski Piaskowe — trzy miski z góry z pędzlowymi wzorami" },
      { src: "/images/products/miski_4.jpg", alt: "Miski Piaskowe — widok z boku, nachylone" },
      { src: "/images/products/miski_5.jpg", alt: "Miski Piaskowe — stosik misek z profilu" },
      { src: "/images/products/miski_6.jpg", alt: "Miski Piaskowe — rozłożone na tkaninie" },
    ],
  },
  {
    id: "patera-rafa",
    name: "Patera Rafa",
    description:
      "Duża patera o organicznych, falujących krawędziach — inspirowana rafą koralową. Szkliwiona w głębokim błękicie z detalem przypominającym koralowiec. Każda sztuka jest niepowtarzalna, idealna jako centerpiece na stole.",
    category: "naczynia",
    images: [
      { src: "/images/products/patera.jpg", alt: "Patera Rafa — zbliżenie na koralowcowy detal i błękitne szkliwo" },
      { src: "/images/products/patera_2.jpg", alt: "Patera Rafa — detal krawędzi z koralowcem" },
      { src: "/images/products/patera_3.jpg", alt: "Patera Rafa — dwie patery na drewnianym stole" },
      { src: "/images/products/patera_4.jpg", alt: "Patera Rafa — widok z boku na falującą krawędź" },
    ],
  },
  {
    id: "naczynie-na-tapas",
    name: "Naczynie na Tapas",
    description:
      "Zestaw do serwowania tapas w surowym, piaskowym wykończeniu z charakterystycznym granatowym splatterem. Miska z paterką — razem tworzą komplet idealny na wspólne posiłki w hiszpańskim stylu.",
    category: "miski",
    images: [
      { src: "/images/products/naczynie_na_tapas.jpg", alt: "Naczynie na Tapas — miska i paterka z góry" },
      { src: "/images/products/naczynie_na_tapas_2.jpg", alt: "Naczynie na Tapas — widok z boku" },
      { src: "/images/products/naczynie_na_tapas_3.jpg", alt: "Naczynie na Tapas — detal splatteru" },
    ],
  },
];
