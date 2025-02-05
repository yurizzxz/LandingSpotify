const Benefits = () => {
    const benefits = [
      {
        icon: "block",
        title: "Sem Anúncios",
        description: "Ouça suas músicas favoritas sem interrupções.",
      },
      {
        icon: "cloud_download",
        title: "Modo Offline",
        description: "Baixe suas músicas e ouça sem precisar de internet.",
      },
      {
        icon: "high_quality",
        title: "Qualidade Premium",
        description: "Áudio de alta qualidade para uma experiência imersiva.",
      },
      {
        icon: "skip_next",
        title: "Pule Quantas Vezes Quiser",
        description: "Troque de música sem limitações.",
      },
    ];
  
    return (
      <section className="py-28 bg-[var(--background)] text-white">
        <div className="max-w-7xl container mx-auto px-6 text-left md:text-center">
          <h2 className="text-4xl font-bold">Benefícios do Spotify</h2>
          <p className="mt-4 text-lg opacity-75">
            Desfrute de uma experiência musical sem interrupções com recursos
            exclusivos para você.
          </p>
  
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-6 hover:scale-[1.02] transition-all bg-[var(--cardColor)] text-left rounded-lg  border border-[var(--border)]"
              >
                <span className="material-icons text-spotify" style={{ fontSize: "50px" }}>
                  {benefit.icon}
                </span>
                <h3 className="text-2xl font-bold mt-4">{benefit.title}</h3>
                <p className="mt-2 text-sm opacity-75">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Benefits;
  