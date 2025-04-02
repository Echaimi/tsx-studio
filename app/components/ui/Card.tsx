interface CardProps {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
}

export function Card({
  icon,
  iconColor,
  iconBgColor,
  title,
  description,
}: CardProps) {
  return (
    <div className="p-4 md:p-5 rounded-lg bg-white shadow-lg">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 ${iconBgColor} rounded-md flex items-center justify-center mb-3`}
      >
        <span className={iconColor}>{icon}</span>
      </div>
      <h3 className="text-sm md:text-[12px] font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-[12px] text-gray-600">{description}</p>
    </div>
  );
}
