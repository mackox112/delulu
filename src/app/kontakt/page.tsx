import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z Delulu Ceramics przez Instagram, WhatsApp lub e-mail.",
};

export default function KontaktPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading subtitle="Chcesz zamówić ceramikę lub masz pytania?">
        Kontakt
      </SectionHeading>

      <div className="max-w-2xl mx-auto">
        <p className="text-center text-warm-gray text-lg mb-10">
          Skontaktuj się z Ali przez ulubiony kanał. Chętnie odpowiemy na
          pytania, doradzimy i przyjmiemy zamówienie.
        </p>
        <SocialLinks variant="contact" />
      </div>
    </div>
  );
}
