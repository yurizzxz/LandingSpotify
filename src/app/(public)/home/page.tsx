import About from "@/app/_layout/about";
import Hero from "@/app/_layout/hero";
import Plans from "@/app/_layout/plans";
import React from "react";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Plans />
    </main>
  );
}
