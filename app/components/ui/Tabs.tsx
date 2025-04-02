"use client";

interface Tab {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface TabsProps {
  tabs: Tab[];
  variant?: "default" | "connected";
}

export function Tabs({ tabs, variant = "default" }: TabsProps) {
  const getTabStyles = (isActive: boolean) => {
    if (variant === "connected") {
      return `px-4 py-2 text-sm flex-1 ${
        isActive
          ? "bg-blue-600 text-white rounded-md"
          : "bg-white text-gray-600"
      }`;
    }

    return `px-4 py-2 text-sm ${
      isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
    }`;
  };

  return (
    <div
      className={`flex ${
        variant === "connected" ? "bg-gray-100 rounded-md w-fit" : "border-b"
      }`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={tab.onClick}
          className={getTabStyles(tab.isActive)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
