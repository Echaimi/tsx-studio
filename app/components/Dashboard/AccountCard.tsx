interface AccountCardProps {
  name: string;
  address: string;
  postalCode: string;
  segment: string;
  riskLevel: string;
  riskScore: string;
  lastTransaction: string;
}

export function AccountCard({
  name,
  address,
  postalCode,
  segment,
  riskLevel,
  riskScore,
  lastTransaction,
}: AccountCardProps) {
  return (
    <div className="mb-8 max-w-[1440px] mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Mon compte</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm relative min-h-[160px] max-h-[160px]">
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
            <div className="text-[14px] md:text-[16px] font-bold text-gray-900 mb-1">
              {name}
            </div>
            <div className="text-[10px] md:text-[12px] text-gray-400">
              {address}
              <br />
              {postalCode}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm relative min-h-[160px] max-h-[160px]">
          <div className="text-[10px] md:text-[12px] text-gray-500 mb-4">
            Segment
          </div>
          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-2xl md:text-4xl font-bold text-blue-900">
            RET
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm relative min-h-[160px] max-h-[160px]">
          <div className="text-[10px] md:text-[12px] text-gray-500 mb-1">
            Évaluation des risques
          </div>
          <div className="text-[10px] md:text-[12px] text-green-500">
            {riskLevel}
          </div>
          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-2xl md:text-4xl font-bold text-green-500">
            B
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm relative min-h-[160px] max-h-[160px]">
          <div className="text-[10px] md:text-[12px] text-gray-500 mb-1">
            Score risque
          </div>
          <div className="text-[10px] md:text-[12px] text-black bold mb-8 md:mb-12">
            Lorem ipsum
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] md:text-[10px]">A</span>
            <div className="relative flex-1 h-4 md:h-5 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 rounded-full">
              <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full  "></div>
            </div>
            <span className="text-[8px] md:text-[10px]">C</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm relative min-h-[160px] max-h-[160px]">
          <div className="text-xs   text-gray-500 mb-2">
            Montant dernière transaction
          </div>
          <div className="text-2xl md:text-4xl font-bold text-blue-900">
            {lastTransaction}
          </div>
          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 text-base md:text-lg">€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
