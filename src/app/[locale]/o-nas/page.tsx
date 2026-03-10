import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default function ONasPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading subtitle={t("subtitle")}>
        {t("heading")}
      </SectionHeading>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-light">
            <Image
              src="/images/ala_na_targach.JPG"
              alt={t("alicjaAlt")}
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal">
              {t("storyTitle")}
            </h3>
            <p className="text-warm-gray leading-relaxed">
              {t("storyP1")}
            </p>
            <p className="text-warm-gray leading-relaxed">
              {t("storyP2")}
            </p>
            <p className="text-warm-gray leading-relaxed">
              {t("storyP3")}
            </p>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
            {t("processHeading")}
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-bold">1</span>
              </div>
              <h4 className="font-semibold text-charcoal">{t("step1Title")}</h4>
              <p className="mt-2 text-sm text-warm-gray">
                {t("step1Text")}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-bold">2</span>
              </div>
              <h4 className="font-semibold text-charcoal">{t("step2Title")}</h4>
              <p className="mt-2 text-sm text-warm-gray">
                {t("step2Text")}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-bold">3</span>
              </div>
              <h4 className="font-semibold text-charcoal">{t("step3Title")}</h4>
              <p className="mt-2 text-sm text-warm-gray">
                {t("step3Text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
