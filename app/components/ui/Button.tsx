import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline" | "link";
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "filled",
  fullWidth,
  onClick,
}: ButtonProps) {
  const baseClasses = "px-4 py-2 md:px-6 md:py-1.5 rounded-md text-[12px]";
  const variants = {
    filled: "bg-green-500 text-white ",
    outline: "text-green-500 border border-green-500 hover:bg-green-50",
    link: "text-green-600 hover:text-gray-900 underline underline-offset-4 decoration-1",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
