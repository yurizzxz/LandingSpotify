import About from "@/app/_layout/about";
import Benefits from "@/app/_layout/benefits";
import FAQ from "@/app/_layout/faq";
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
      <Plans />
      <SocialProof />
      <FAQ />
    </main>
  );
}
