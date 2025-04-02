interface FeatureLink {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

interface FeaturesProps {
  links?: FeatureLink[];
  bulletPoints?: string[];
}

export function Features({
  links = [
    { text: "Prêts", href: "#", variant: "primary" },
    { text: "Affacturage", href: "#", variant: "secondary" },
  ],
  bulletPoints = [
    `Refinancer son entreprise`,
    `Ouvrir une nouvelle agence`,
    `Faire connaitre son entreprise`,
    `Se lancer à l'international`,
    `Digitaliser son entreprise`,
    `Acquérir une entreprise`,
    `Transformer son entreprise`,
    `Financer des projets de développements durables`,
  ],
}: FeaturesProps) {
  return (
    <div className="w-full bg-gray-50 py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm md:text-[18px] ${
                  link.variant === "primary"
                    ? "text-green-500 hover:text-green-600"
                    : "text-gray-400 hover:text-gray-500"
                } flex items-center ${index > 0 ? "mt-2" : ""}`}
              >
                {link.text} <span className="ml-2">→</span>
              </a>
            ))}
          </div>
          <div>
            <p className="text-sm md:text-[12px] text-gray-800 mb-8">
              Des taux compétitifs en quelques clics.
              <br className="hidden md:block" />
              Quel que soit votre projet, nous vous accompagnons de manière
              bienveillante avec les meilleurs outils en ligne. Oubliez le
              parcours du combattant, à vous le financement professionnel à
              court terme. Chez Liqtrade nous vous aidons à évoluer à travers
              des solutions de financement simples, efficaces et compétitives en
              seulement quelques clics.
            </p>
            <p className="text-sm md:text-[12px] text-gray-800 mb-4">
              TPE/PME, comptez sur nous pour vous aider à :
            </p>
            <ul className="space-y-1 mb-8 text-sm md:text-[12px] text-gray-400">
              {bulletPoints.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white text-sm md:text-[12px] rounded-lg hover:bg-gray-800">
              Vidéo de présentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
