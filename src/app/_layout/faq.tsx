"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "O que é o Spotify Premium?",
      answer:
        "O Spotify Premium é um serviço pago que permite ouvir músicas sem anúncios, baixar faixas para ouvir offline e pular quantas músicas quiser.",
    },
    {
      question: "Posso cancelar o Spotify Premium a qualquer momento?",
      answer:
        "Sim! Você pode cancelar a assinatura a qualquer momento, e continuará tendo acesso até o fim do período já pago.",
    },
    {
      question: "O Spotify tem um plano gratuito?",
      answer:
        "Sim! O plano gratuito permite ouvir músicas com anúncios e algumas limitações, como pulos limitados e qualidade de áudio reduzida.",
    },
    {
      question: "Posso usar o Spotify em vários dispositivos?",
      answer:
        "Sim! Você pode acessar o Spotify no celular, computador, smart TVs e até no carro. O Premium permite ouvir offline em até 5 dispositivos.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-10">
          Perguntas <span className="text-spotify">Frequentes</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--cardColor)] py-7 px-5 border border-[var(--border)] rounded-lg cursor-pointer transition-transform duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <span className="text-2xl text-spotify">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
                  openIndex === index ? "max-h-[500px] " : ""
                }`}
              >
                {openIndex === index && (
                  <p className="mt-3 text-gray-300">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
