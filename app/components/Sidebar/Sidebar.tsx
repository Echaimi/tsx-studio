interface MenuItem {
  icon: string;
  label: string;
  isActive?: boolean;
  notificationCount?: number;
}

export function Sidebar() {
  const menuItems: MenuItem[] = [
    {
      icon: "/tableau-de-bord.png",
      label: "Tableau de Bord",
      isActive: true,
    },
    {
      icon: "/transaction.png",
      label: "Mes transactions",
    },
    {
      icon: "/client.png",
      label: "Mes clients",
    },
    {
      icon: "/assistance.png",
      label: "Assistance",
    },
    {
      icon: "/notification.png",
      label: "Mes notifications",
      notificationCount: 1,
    },
    {
      icon: "/reglages.png",
      label: "Réglages",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-white">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center justify-center">
          <div className="text-[12px] font-bold">LIQTRADE</div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-3 rounded-lg mb-1 cursor-pointer ${
              item.isActive
                ? "bg-gray-100 text-blue-700"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-4 h-4 object-contain"
            />
            <span className="ml-3 text-[12px] font-medium">{item.label}</span>
            {item.notificationCount && (
              <span className="ml-auto bg-gray-100 text-gray-600 text-[12px] px-2 py-0.5 rounded-full">
                {item.notificationCount}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 w-64 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-[12px] text-gray-600">PD</span>
          </div>
          <div className="ml-3">
            <div className="text-[12px] font-medium text-gray-900">
              Paul Dumartin
            </div>
            <div className="text-[12px] text-green-600">
              Statut Vérification KYC : Validé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
