import Image from "next/image";

const TopArtists = () => {
  const artists = [
    {
      name: "The Weeknd",
      image: "/theweeknd.png",
    },
    {
      name: "Taylor Swift",
      image: "/taylorswift.png",
    },
    {
      name: "Billie Eilish",
      image: "/billieeilish.png",
    },
    {
      name: "Post Malone",
      image: "/postmalone.png",
    },
  ];

  return (
    <section className="py-40 bg-[var(--background)]" id="topartists">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-white text-left md:text-center mb-2">
            Artistas Mais Tocados de <span className="text-spotify">2024</span>
          </h2>
          <p className="text-lg md:text-xl opacity-75 text-left md:text-center">
            Confira os artistas mais queridos do público em 2024!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="group relative ">
              <div className="w-full cursor-pointer  aspect-square border border-[var(--border)] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={artist.image}
                  width={500}
                  height={500}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-white mt-4">
                {artist.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtists;
