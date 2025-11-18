import { Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    "Structure durable en aluminium ou bois",
    "Système de drainage dissimulé",
    "Solutions d'ombrage intégrées",
    "Vues filigranes",
    "Chauffage",
    "Ventilation",
    "Ouvertures multiples",
    "Diverses formes de toits",
    "Vaste choix d'accessoires",
    "Commande manuelle ou electrique",
    "Complètement personnalisable",
    "Et plus encore...",
  ];
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Des vérandas d'exception
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="text-primary flex-shrink-0" size={20} />
              <span className="text-foreground font-rubik text-lg">{feature}</span>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/features-header.jpg"
              alt="Vérandas et pergolas Hélios Créations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="btn-helios-cta"
            onClick={() =>
              document.getElementById("contact-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            DEMANDEZ UN DEVIS GRATUIT
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
