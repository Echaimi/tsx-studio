"use client";

import { useState, useEffect } from "react";

interface TransactionState {
  name: string;
  status: "Validé" | "En attente";
  progress: number;
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    // Set size au premier rendu
    updateSize();

    window.addEventListener("resize", updateSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}

export function Transactions() {
  const [activeTab, setActiveTab] = useState("Actifs");
  const [width] = useWindowSize();
  const chartWidth = width < 768 ? Math.min(width - 40, 320) : 550;

  const tabs = [
    {
      label: "Actifs",
      isActive: activeTab === "Actifs",
      onClick: () => setActiveTab("Actifs"),
    },
    {
      label: "En attente (1)",
      isActive: activeTab === "En attente",
      onClick: () => setActiveTab("En attente"),
    },
    {
      label: "Clos",
      isActive: activeTab === "Clos",
      onClick: () => setActiveTab("Clos"),
    },
  ];

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-4">
        Transactions
      </h2>

      <div className="w-full md:w-fit bg-gray-100 rounded-md overflow-x-auto">
        <div className="flex flex-nowrap min-w-[300px]">
          <button
            className={`px-4 md:px-22 py-2 text-sm md:text-base rounded-l-md transition-colors duration-200 flex-1 md:flex-none ${
              activeTab === "Actifs"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("Actifs")}
          >
            Actifs
          </button>
          <button
            className={`px-4 md:px-22 py-2 text-sm md:text-base rounded-r-md transition-colors duration-200 ${
              activeTab === "En attente"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("En attente")}
          >
            En attente (1)
          </button>
          <button
            className={`px-4 md:px-22 py-2 text-sm md:text-base rounded-r-md transition-colors duration-200 ${
              activeTab === "Clos"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("Clos")}
          >
            Clos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm h-auto min-h-[200px] sm:min-h-[250px] xl:min-h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-gray-600 mb-4 md:mb-8">État</h3>
            <div className="space-y-4 md:space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm md:text-base">Prêt Société</span>
                  <span className="flex items-center gap-1 md:gap-2 text-green-500 text-sm md:text-base">
                    Validé
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="h-2 md:h-3 bg-green-500 rounded-full w-full" />
              </div>
              <div className="mb-4 md:mb-10">
                <div className="flex text-xs justify-between items-center mb-2">
                  <span>Prêt HotDoggs</span>
                  <span className="flex items-center gap-2 text-blue-600">
                    En attente
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="h-3 bg-blue-600 rounded-full w-3/5" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <button className="text-black text-xs md:text-sm underline px-2 md:px-4 py-1 md:py-2">
              Créer un nouveau dossier
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm h-auto min-h-[200px] sm:min-h-[250px] xl:min-h-[300px] flex flex-col">
          <h3 className="text-black text-left text-sm sm:text-base">
            Prêt Société
          </h3>
          <div className="flex-1 flex items-center">
            <div className="w-full space-y-2 sm:space-y-4">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center">
                39 234€
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-500 text-center mb-2 md:mb-6">
                Montant du prêt en cours
              </div>
              <div className="flex items-center justify-center text-green-500 text-sm md:text-base">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Prêt validé
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm h-auto min-h-[200px] sm:min-h-[250px] xl:min-h-[300px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-black text-sm md:text-base">En attente</h3>
            <span className="text-gray-700 text-sm md:text-base">
              Prêt HotDoggs
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 flex-1">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 flex-shrink-0">
              <svg
                className="transform -rotate-90 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f3f4f6"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#22c55e"
                  strokeWidth="12"
                  strokeDasharray="62.83 251.32"
                  strokeDashoffset="0"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f97316"
                  strokeWidth="12"
                  strokeDasharray="62.83 251.32"
                  strokeDashoffset="-62.83"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#2563eb"
                  strokeWidth="12"
                  strokeDasharray="62.83 251.32"
                  strokeDashoffset="-125.66"
                  fill="none"
                />
              </svg>
            </div>
            <div className="mt-6 ml-4 space-y-2 w-full">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded relative flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs">Évaluation des risques</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded relative flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs">Accord demande</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded relative flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs">Accord ouverture</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 text-left text-xs text-gray-500">
            <p className="mb-4 text-black text-sm ">
              Pour déclencher la prochaine étape de validation, veuillez nous
              joindre :
            </p>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Dossier super important.pdf</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm h-auto min-h-[200px] sm:min-h-[250px] xl:min-h-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-black mb-4 text-left">Clôturé</h3>
            <div>
              <img
                src="/trophee.png"
                alt="Trophy"
                className="w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 mx-auto"
              />
              <div className="mt-4">
                <div className="font-medium text-left">Prêt Société</div>
                <div className="text-sm text-gray-500 text-left">
                  Estimation de clôture du dossier au 13/06/2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mx-auto text-[12px]">
        <div className="overflow-x-auto rounded-xl">
          <div className="min-w-[800px]">
            <table className="w-full bg-white shadow-sm table-fixed">
              <colgroup>
                <col className="w-[15%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[15%]" />
              </colgroup>
              <thead>
                <tr className="text-sm text-blue-600">
                  <th className="text-left py-2 md:py-4 px-3 md:px-6 text-[12px]"></th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Numéro de contrat
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Identifiant emprunteur
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Montant demandé
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Montant du prêt
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Mensualité
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Durée souhaitée
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                <tr>
                  <td className="py-4 px-6 font-medium">Prêt Société</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    13452789
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    UK567UI8
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    39 234€
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    39 234€
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">700€</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    18 mois
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Prêt HotDoggs</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    67547800
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    UK567UI8
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    12 300€
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    En attente
                  </td>
                  <td className="text-center py-4 px-6 text-gray-500">
                    En attente
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    14 mois
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <div className="min-w-[800px]">
            <table className="w-full bg-white shadow-sm table-fixed">
              <colgroup>
                <col className="w-[15%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[14%]" />
                <col className="w-[15%]" />
              </colgroup>
              <thead>
                <tr className="text-sm text-blue-600">
                  <th className="text-left py-2 md:py-4 px-3 md:px-6 text-[12px]"></th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Taux d'intérêt
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Commission
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Taux Effet Global
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Date de la demande
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Date dernière échéance
                  </th>
                  <th className="text-center py-2 md:py-4 px-3 md:px-6 text-[12px]">
                    Statut de la demande
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                <tr>
                  <td className="py-4 px-6 font-medium">Prêt Société</td>
                  <td className="text-center py-4 px-6 text-gray-700">3%</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    Lorem Ipsum
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">3</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    01/11/2019
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    01/04/2022
                  </td>
                  <td className="text-center py-4 px-6 text-green-500">
                    Validé
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Prêt HotDoggs</td>
                  <td className="text-center py-4 px-6 text-gray-700">8%</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    Lorem Ipsum
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">5</td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    04/09/2021
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    En attente
                  </td>
                  <td className="text-center py-4 px-6 text-gray-700">
                    En attente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
