import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile = false }: NavLinkProps) {
  if (mobile) {
    return (
      <motion.a
        href={href}
        className="text-lg text-black hover:text-gray-600"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <a
      href={href}
      className="text-sm md:text-[12px] text-black hover:text-gray-600"
    >
      {children}
    </a>
  );
}
