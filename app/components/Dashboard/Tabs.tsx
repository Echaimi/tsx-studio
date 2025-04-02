interface Tab {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface TabsProps {
  tabs: Tab[];
  variant?: "default" | "connected";
}

export function Tabs({ tabs, variant = "default" }: TabsProps) {
  if (variant === "connected") {
    return (
      <div className="flex bg-gray-100 rounded-md">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={tab.onClick}
            className={`
              flex-1 px-4 py-2 text-xs
              ${index === 0 ? "rounded-l-md" : ""}
              ${index === tabs.length - 1 ? "rounded-r-md" : ""}
              ${
                tab.isActive
                  ? "bg-blue-100 text-blue-900 font-medium"
                  : "bg-grey text-gray-500 hover:bg-gray-50"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={tab.onClick}
          className={`px-8 py-2 text-[12px] ${index > 0 ? "-ml-1" : ""} ${
            tab.isActive
              ? "bg-blue-100 text-blue-700 rounded-lg z-10"
              : "bg-white text-gray-500 hover:bg-gray-50 rounded-lg"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
