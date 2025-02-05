import Image from "next/image";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Lucas Almeida",
      image: "/user1.jpg",
      text: "O Spotify revolucionou minha forma de ouvir música! Playlists incríveis e som de alta qualidade.",
    },
    {
      name: "Fernanda Souza",
      image: "/user2.jpg",
      text: "Sem anúncios, músicas offline e qualidade absurda! Nunca mais uso outro app de streaming.",
    },
    {
      name: "Ricardo Menezes",
      image: "/user3.jpg",
      text: "A curadoria das playlists é surreal! Sempre descubro novas músicas e artistas incríveis.",
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-extrabold text-white text-left md:text-center mb-10">
          O que nossos <span className="text-spotify">usuários</span> dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--cardColor)] p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                width={200}
                height={200}
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-lg text-white italic">"{testimonial.text}"</p>
              <h3 className="mt-4 text-xl font-semibold text-spotify">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
