"use client";

import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { Cards } from "./components/sections/Cards";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:h-screen">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Hero
          title={`Notre intérêt,
c'est le vôtre.`}
          titleColor="text-gray-900"
          subtitle="FINANCEMENT PROFESSIONNEL À COURT TERME"
          description={`Simple, efficace et rapide. Profitez du service Liqtrade
sans garantie personnelle`}
          imageSrc="/phone.png"
        />
      </div>

      <Features />
      <Cards />
    </main>
  );
}
