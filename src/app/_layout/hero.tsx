import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex justify-center md:min-h-screen overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0">
        <div className="absolute z-50 left-5 w-[600px] h-[550px] bg-spotify rounded-full blur-[130px] opacity-10"></div>
        <div className="absolute top-1/2 z-50 right-12 w-[500px] h-[500px] bg-green-800 rounded-full blur-[130px] opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-wrap pt-20 md:pt-0 justify-center md:flex-nowrap md:items-center md:justify-between gap-12 max-w-7xl px-2 w-full container mx-auto">
        <div className="text-left text-white max-w-xl">
          <h1
            className="text-5xl sm:text-6xl font-extrabold"
            style={{ lineHeight: 1.1 }}
          >
            <span className="text-spotify">Discover</span> Your Perfect
            Soundtrack <br />
            for <span className="text-spotify">Every Moment</span> of Your Life!
          </h1>

          <p className="mt-4 text-xl opacity-75">
            Dive into a world of endless music. Create personalized playlists,
            discover new artists, and enjoy an immersive audio experience like
            never before.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="px-6 py-3 w-full text-lg font-bold bg-spotify hover:bg-spotifyhover transition duration-300 text-white rounded-lg shadow-lg">
              Start Listening
            </button>
            <button className="px-6 py-3 w-full text-lg font-bold border border-spotify hover:bg-spotifyhover transition duration-300 text-white rounded-lg shadow-lg">
              Start Listening
            </button>
          </div>
        </div>

        <div className="hidden absolute bottom-0 right-0 md:w-[550px] md:block">
          <Image
            loading="lazy"
            width={800}
            height={800}
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
