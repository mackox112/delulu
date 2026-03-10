import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import CollectionTabs from "@/components/CollectionTabs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("collectionTitle"),
    description: t("collectionDescription"),
  };
}

export default function KolekcjaPage() {
  const t = useTranslations("collection");

  return (
    <>
      <section className="pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle={t("subtitle")}>
            {t("heading")}
          </SectionHeading>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CollectionTabs />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            {t("interestedHeading")}
          </h2>
          <p className="mt-4 text-warm-gray text-lg">
            {t("interestedText")}
          </p>
          <div className="mt-8">
            <SocialLinks variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
