'use client';

import Image from "next/image";

const Hero = () => {

  return (
    <section
      className="relative flex justify-center py-6 md:py-0 md:min-h-screen overflow-hidden"
      id="home"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute z-0 md:z-50 left-5 w-[230px] h-[350px] bg-spotify rounded-full blur-[130px] opacity-[0.10] md:opacity-15"></div>
        <div className="absolute top-1/2 z-0 md:z-50 right-12 w-[500px] h-[500px] bg-green-800 rounded-full blur-[130px] opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-wrap pt-20 md:pt-0 justify-center md:flex-nowrap md:items-center md:justify-between gap-12 max-w-7xl px-2 w-full container mx-auto">
        <div className="text-left text-white md:max-w-md lg:max-w-2xl">
          <h1
            className="text-5xl sm:text-6xl font-extrabold"
            style={{ lineHeight: 1.1 }}
          >
            <span className="text-spotify">Descubra</span> Sua Trilha Sonora
            Perfeita <br />
            para <span className="text-spotify">Cada Momento</span> da Sua Vida!
          </h1>

          <p className="mt-4 text-xl opacity-75">
            Mergulhe em um mundo de música infinita. Crie playlists
            personalizadas, descubra novos artistas e aproveite uma experiência
            de áudio imersiva como nunca antes.
          </p>

          <div className="mt-6 flex flex-col lg:flex-row gap-4">
            <button className="px-6 py-3 w-full text-lg font-bold bg-spotify hover:bg-spotifyhover transition duration-300 text-white rounded-lg shadow-lg">
              Comece a Ouvir
            </button>
            <button className="px-6 py-3 w-full text-lg font-bold border border-spotify hover:bg-spotifyhover transition duration-300 text-white rounded-lg shadow-lg">
              Comece Agora
            </button>
          </div>
        </div>

        <div className="hidden absolute bottom-0 right-0 md:block">
          <Image
            loading="lazy"
            width={530}
            height={530}
            src="/people.png"
            alt="Spotify Logo"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
