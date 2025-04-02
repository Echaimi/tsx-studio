import { motion } from "framer-motion";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      className="lg:hidden text-gray-600 hover:text-gray-900 z-50"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}
