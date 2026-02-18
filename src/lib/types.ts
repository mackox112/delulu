export type ProductCategory = "kubki" | "miski" | "patery";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  imageSrc: string;
  imageAlt: string;
  price?: string;
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp" | "email";
  href: string;
  label: string;
}
