import { JSX } from "react";

interface Card {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
}

interface CardsProps {
  cards?: Card[];
}

export function Cards({
  cards = [
    {
      icon: "✓",
      iconColor: "text-green-500",
      iconBgColor: "bg-green-50",
      title: "Evaluation du profil de risque de votre client",
      description:
        "Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l'acceptation rapide de votre facture. Notre approche se base sur le profil de risque de votre client et l'échéance de votre facture pour vous proposer le meilleur prix de cession de votre créance.",
    },
    {
      icon: "$",
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-50",
      title: "Meilleur prix de cession de votre créance",
      description:
        "Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu'à 97 % de la valeur nominale de leur facture.",
    },
    {
      icon: "⏱",
      iconColor: "text-cyan-500",
      iconBgColor: "bg-cyan-50",
      title: "Paiement en un temps record pour vos factures",
      description:
        "Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané vous permettant un virement rapide vers la Banque de votre choix.",
    },
    {
      icon: "?",
      iconColor: "text-orange-500",
      iconBgColor: "bg-orange-50",
      title: "Financez vos besoins de trésorerie en temps réel",
      description:
        "Faites une demande de financement en ligne via l'envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé de vos demandes. Vos factures sont ainsi valorisées, validées automatiquement et financées sur notre plateforme.",
    },
  ],
}: CardsProps): JSX.Element {
  return (
    <div className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card: Card, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
            >
              <div
                className={`w-12 h-12 ${card.iconBgColor} ${card.iconColor} rounded-lg flex items-center justify-center text-xl mb-4`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 md:text-[12px] leading-relaxed font-bold">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
