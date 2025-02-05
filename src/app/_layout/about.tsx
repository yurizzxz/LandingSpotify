import Image from "next/image";

const About = () => {
  return (
    <section className="relative flex justify-center overflow-hidden py-0 md:py-32 bg-[var(--background)]">
      <div className="absolute inset-0">
        <div className="absolute z-50  right-12 w-[600px] h-[550px] bg-spotify blur-[130px] opacity-[0.02]"></div>
        <div className="absolute z-50  top-1/2 left-1 w-[500px] h-[500px] bg-green-800 rounded-full blur-[130px] opacity-5"></div>
      </div>

      <div className="z-10 flex flex-wrap pt-20 md:pt-0 justify-center md:flex-nowrap md:items-center md:justify-between gap-12 max-w-7xl px-2 w-full container mx-auto">
        <div className="text-left z-[99] text-white md:order-2 max-w-2xl">
          <h1
            className="text-5xl sm:text-6xl font-extrabold"
            style={{ lineHeight: 1.1 }}
          >
            Sobre<span className="text-spotify"> nós</span>
          </h1>

          <p className="mt-4 text-xl opacity-75">
            Com o Spotify, é fácil encontrar a música ou podcast ideal para cada
            momento, seja no celular, no computador, no tablet ou em outros
            dispositivos.
          </p>
          <p className="mt-4 text-xl opacity-75">
            O Spotify tem milhões de músicas e episódios de podcasts. Então você
            sempre encontra algo ótimo para ouvir, não importa se está dirigindo
            ou fazendo exercícios, em clima de festa ou relaxando em casa.
            Escolha o que quer escutar ou deixe o Spotify te surpreender.
          </p>
          <p className="mt-4 text-xl opacity-75">
            Você também pode explorar as coleções montadas por amigos, artistas
            e celebridades ou criar uma estação de rádio e deixar o som rolar.
          </p>
          <p className="mt-4 text-xl opacity-75">
            Crie a trilha sonora para a sua vida com o Spotify. Faça uma
            assinatura ou crie uma conta grátis.
          </p>
        </div>

        <div className="w-full max-w-[550px] h-auto aspect-square relative z-[99] md:order-1">
          <Image
            src="/profile.jpeg"
            alt="Imagem relacionada ao som"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
