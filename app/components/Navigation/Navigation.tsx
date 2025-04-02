import { BurgerButton } from "./BurgerButton";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";
import { Button } from "../ui/Button";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
    <nav className="flex justify-between items-center px-8 lg:px-20 py-3 relative">
      <BurgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MobileMenu isOpen={isMenuOpen} />

      <div className="hidden lg:flex items-center">
        <span className="text-black font-bold text-xl">LIQ</span>
        <span className="text-blue-700 font-bold text-xl">TRADE</span>
      </div>

      <div className="hidden lg:flex space-x-6 ml-16">
        <NavLink href="#">Prêt</NavLink>
        <NavLink href="#">Affacturage</NavLink>
      </div>

      <div className="hidden lg:flex items-center ml-auto">
        <div className="flex space-x-6 mr-16">
          <NavLink href="#">Simulateur</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">Publications</NavLink>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Button variant="outline">S'inscrire</Button>
          <Button variant="filled">Se connecter</Button>
        </div>
      </div>
    </nav>
  );
}
