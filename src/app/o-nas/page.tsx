import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "O nas",
  description: "Poznaj historię Delulu Ceramics i pasję do ręcznie robionej ceramiki.",
};

export default function ONasPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading subtitle="Poznaj naszą historię">
        O Delulu Ceramics
      </SectionHeading>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] rounded-2xl bg-surface-light flex items-center justify-center text-warm-gray">
            <span className="text-sm">Zdjęcie Ali</span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal">
              Cześć, jestem Ali
            </h3>
            <p className="text-warm-gray leading-relaxed">
              Ceramika jest moją pasją od lat. Każde naczynie, które tworzę,
              jest unikalne — formowane ręcznie na kole garncarskim, szkliwione
              z dbałością o każdy detal i wypalane w wysokiej temperaturze.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Wierzę, że piękne przedmioty codziennego użytku mogą odmienić
              nawet najprostsze chwile — poranną kawę, wspólny obiad czy
              wieczorne herbatę.
            </p>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
            Proces tworzenia
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-heading font-bold">1</span>
              </div>
              <h4 className="font-semibold text-charcoal">Formowanie</h4>
              <p className="mt-2 text-sm text-warm-gray">
                Każde naczynie jest ręcznie toczone na kole garncarskim z naturalnej gliny.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-heading font-bold">2</span>
              </div>
              <h4 className="font-semibold text-charcoal">Szkliwienie</h4>
              <p className="mt-2 text-sm text-warm-gray">
                Naczynia pokrywane są ręcznie mieszanymi szkliwami w unikalnych kolorach.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-heading font-bold">3</span>
              </div>
              <h4 className="font-semibold text-charcoal">Wypalanie</h4>
              <p className="mt-2 text-sm text-warm-gray">
                Dwukrotne wypalanie w piecu ceramicznym nadaje trwałość i piękny wygląd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
