import About from "@/app/_layout/about";
import Benefits from "@/app/_layout/benefits";
import Hero from "@/app/_layout/hero";
import Plans from "@/app/_layout/plans";
import SocialProof from "@/app/_layout/social";
import TopArtists from "@/app/_layout/topartists";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <About />
      <TopArtists />
      <SocialProof />
      <Plans />
    </main>
  );
}
