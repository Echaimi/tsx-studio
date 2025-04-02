interface Tab {
  label: string;
  isActive?: boolean;
}

export function TabNav() {
  const tabs: Tab[] = [
    { label: "Mes prêts", isActive: true },
    { label: "Mes factures" },
  ];

  return (
    <div className="flex mb-8">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
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
      <button className="ml-auto px-6 py-2 bg-blue-700 text-white rounded-lg text-[12px]">
        Demander un financement
      </button>
    </div>
  );
}
