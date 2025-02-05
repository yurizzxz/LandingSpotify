import Image from "next/image";

const Plans = () => {
  const plans = [
    {
      name: "Individual",
      price: "R$ 21,90/mês",
      benefits: [
        "1 conta Premium",
        "Ouça sem anúncios",
        "Modo offline",
        "Reprodução sob demanda",
      ],
    },
    {
      name: "Duo",
      price: "R$ 27,90/mês",
      benefits: [
        "2 contas Premium",
        "Para casais que moram juntos",
        "Ouça sem anúncios",
        "Modo offline",
      ],
    },
    {
      name: "Família",
      price: "R$ 34,90/mês",
      benefits: [
        "Até 6 contas Premium",
        "Bloqueie músicas explícitas",
        "Para membros da família que moram juntos",
        "Ouça sem anúncios",
      ],
    },
    {
      name: "Universitário",
      price: "R$ 11,90/mês",
      benefits: [
        "1 conta Premium",
        "Desconto especial para estudantes",
        "Ouça sem anúncios",
        "Modo offline",
      ],
    },
  ];

  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-28 md:py-28 bg-[var(--background)]" id="planos">
      <div className="z-10 max-w-7xl px-2 w-full container mx-auto text-left md:text-center text-white">
        <h1 className="text-4xl md:text-5xl  font-extrabold">
          <span className="text-spotify">Nossos</span> Planos
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-75">
          Escolha o plano ideal para você e aproveite a melhor experiência
          musical.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[var(--cardColor)] hover:scale-[1.02] transition-all rounded-lg border border-[var(--border)] flex flex-col h-full"
            >
              <div className="py-5 px-3.5 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-left">
                  Premium<span className="text-spotify"> {plan.name}</span>
                </h2>
                <p className="text-xl font-semibold text-left mt-2">
                  {plan.price}
                </p>
                <ul className="mt-5 text-left text-sm space-y-2 flex-grow">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-icons text-green-500">
                        check_circle
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <button className="px-6 py-2.5 w-full text-lg font-bold bg-spotify hover:bg-spotifyhover transition duration-300 text-white rounded-lg shadow-md">
                    Assinar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
