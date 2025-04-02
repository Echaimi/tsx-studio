import { Button } from "../ui/Button";

interface HeroProps {
  title: string;
  titleColor?: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export function Hero({
  title,
  titleColor,
  subtitle,
  description,
  imageSrc,
}: HeroProps) {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 w-full flex items-center">
        <div className="w-full md:w-1/2 z-10 mb-10 md:mb-0">
          <h2 className="text-xs sm:text-sm md:text-base text-blue-700 uppercase tracking-widest mb-4 font-bold">
            {subtitle}
          </h2>
          <h1
            className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight whitespace-pre-line ${
              titleColor || "text-black"
            }`}
          >
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 mb-8 md:mb-12 whitespace-pre-line">
            {description}
          </p>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Button variant="filled">Se connecter</Button>
            <Button variant="link">S'inscrire →</Button>
          </div>
        </div>
      </div>

      <div className="w-full md:absolute md:right-0 md:w-[50%] md:h-full flex items-center justify-center md:-translate-x-0 md:justify-end overflow-hidden md:mt-0">
        <div className="relative w-[100%] translate-x-6 md:w-full flex items-center md:translate-x-5">
          <img
            src={imageSrc}
            alt="Application mobile avec pièces"
            className="w-[90%] md:w-full h-full object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
