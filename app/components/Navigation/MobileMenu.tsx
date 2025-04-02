import { motion } from "framer-motion";
import { NavLink } from "./NavLink";
import { Button } from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ type: "spring", damping: 20 }}
      className="lg:hidden fixed top-0 left-0 right-0 w-screen h-full bg-white shadow-lg z-40 overflow-y-auto"
    >
      <div className="flex flex-col p-6 space-y-6 pt-20 pb-24 max-w-screen">
        <NavLink href="#" mobile>
          Prêt
        </NavLink>
        <NavLink href="#" mobile>
          Affacturage
        </NavLink>
        <NavLink href="#" mobile>
          Simulateur
        </NavLink>
        <NavLink href="#" mobile>
          Contact
        </NavLink>
        <NavLink href="#" mobile>
          Publications
        </NavLink>

        <div className="pt-6 space-y-4">
          <Button variant="outline" fullWidth>
            S'inscrire
          </Button>
          <Button variant="filled" fullWidth>
            Se connecter
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
