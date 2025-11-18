const TestimonialsSection = () => {
  const testimonials = [
    {
      location: "Fribourg",
      text: "Je recommande cette société de jardin d'hiver. Les travaux sont effectués de manière efficaces et de très grande qualité. Je recommande !",
      image: "/lovable-uploads/6d2657b8-4d27-4e2f-b9b8-cdf532e50db2.png",
    },
    {
      location: "Portalban",
      text: "Une superbe pièce à vivre en plus. Très bonne qualité du produit. Un projet très bien mené de la conception à la pose. Merci à vous",
      image: "/lovable-uploads/06419cd7-7b20-4d68-a484-02f45e6ce599.png",
    },
    {
      location: "Conthey",
      text: "Nous avons décidé mon époux et moi de réaliser une véranda avec Hélios Créations. Ils ont tout de suite compris nos attentes. Nous remercions cette société qui a respecté les délais et les coûts.",
      image: "/lovable-uploads/9b0a9fbd-5a55-4a4f-a25b-1d4465c4c7eb.png",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Ce qu'en pensent nos clients
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image with location title overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`Pergola ${testimonial.location}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg font-red-hat">{testimonial.location}</h3>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="p-6">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-foreground font-rubik leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
