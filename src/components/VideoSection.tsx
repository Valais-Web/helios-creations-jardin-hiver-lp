const VideoSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-8">
          Découvrez nos réalisations
        </h2>
        
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg group">
          <img
            src="/lovable-uploads/header-avalis-desktop-3.jpg"
            alt="Véranda moderne avec piscine - Hélios Créations"
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;