export interface ProductImage {
  src: string;
}

export interface Product {
  id: string;
  images: ProductImage[];
  category: "kubki" | "miski" | "naczynia";
  featured?: boolean;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp" | "email";
  href: string;
  label: string;
}
