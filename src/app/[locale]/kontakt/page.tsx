import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default function KontaktPage() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading subtitle={t("subtitle")}>
        {t("heading")}
      </SectionHeading>

      <div className="max-w-2xl mx-auto">
        <p className="text-center text-warm-gray text-lg mb-10">
          {t("description")}
        </p>
        <SocialLinks variant="contact" />
      </div>
    </div>
  );
}
