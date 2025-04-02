"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Tabs } from "./Tabs";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const chartData = [
  { day: "1", value1: 10, value2: 15, value3: 8 },
  { day: "5", value1: 20, value2: 18, value3: 12 },
  { day: "10", value1: 15, value2: 22, value3: 15 },
  { day: "15", value1: 25, value2: 28, value3: 20 },
  { day: "20", value1: 30, value2: 25, value3: 25 },
  { day: "25", value1: 45, value2: 30, value3: 28 },
];

function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export function FinancialInfo() {
  const [activeTab, setActiveTab] = useState("Euribor1w");
  const { width } = useWindowSize();
  const [chartWidth, setChartWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const tabs = [
    {
      label: "Euribor1w",
      isActive: activeTab === "Euribor1w",
      onClick: () => setActiveTab("Euribor1w"),
    },
    {
      label: "Euribor2w",
      isActive: activeTab === "Euribor2w",
      onClick: () => setActiveTab("Euribor2w"),
    },
    {
      label: "Euribor3w",
      isActive: activeTab === "Euribor3w",
      onClick: () => setActiveTab("Euribor3w"),
    },
    {
      label: "Average Sector Spread",
      isActive: activeTab === "Average Sector Spread",
      onClick: () => setActiveTab("Average Sector Spread"),
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    const updateWidth = () => {
      const width = window.innerWidth;
      setChartWidth(width < 768 ? Math.min(width - 40, 320) : 550);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-[250px] bg-gray-100 animate-pulse rounded-lg"></div>
    ); // Placeholder pendant le chargement
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Informations financières</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm flex flex-col justify-center">
          <div className="flex flex-col items-center w-full">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[320px] w-full flex justify-center">
                <LineChart
                  width={chartWidth}
                  height={Math.min(250, width * 0.4)}
                  data={chartData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#22c55e"
                    name="Lorem ipsum"
                    dot={false}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#06b6d4"
                    name="Lorem ipsum"
                    dot={false}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="value3"
                    stroke="#f97316"
                    name="Lorem ipsum"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-4 md:mt-6 px-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#22c55e]"></div>
                <span className="text-xs md:text-sm text-gray-600">
                  Lorem ipsum
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#06b6d4]"></div>
                <span className="text-xs md:text-sm text-gray-600">
                  Lorem ipsum
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#f97316]"></div>
                <span className="text-xs md:text-sm text-gray-600">
                  Lorem ipsum
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
          <div className="mb-4 md:mb-6">
            <Tabs tabs={tabs} variant="connected" />
          </div>
          <div className="w-full">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-[11px] md:text-xs">
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-blue-900 font-bold">
                    Tenor
                  </th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-blue-900 font-bold">
                    Market
                  </th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-blue-900 font-bold">
                    Risk Date
                  </th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-blue-900 font-bold">
                    Premium
                  </th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-blue-900 font-bold">
                    Change %
                  </th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 text-blue-900 font-bold">
                    Var.
                  </th>
                </tr>
              </thead>
              <tbody className="text-[11px] md:text-xs text-gray-500">
                {[
                  {
                    tenor: "7 DAYS",
                    marketPlace: "0.0000",
                    riskFreeDate: "0",
                    premium: "0.0000",
                    change: "0.0000",
                    variation: "1",
                  },
                  {
                    tenor: "30 DAYS",
                    marketPlace: "0.0000",
                    riskFreeDate: "0",
                    premium: "0.0000",
                    change: "0.0000",
                    variation: "9",
                  },
                  {
                    tenor: "90 DAYS",
                    marketPlace: "0.0300",
                    riskFreeDate: "0.02345",
                    premium: "0.0300",
                    change: "0.0300",
                    variation: "0.02345",
                  },
                  {
                    tenor: "180 DAYS",
                    marketPlace: "0.03500",
                    riskFreeDate: "0.03500",
                    premium: "0.03500",
                    change: "0.03500",
                    variation: "0.03500",
                  },
                  {
                    tenor: "360 DAYS",
                    marketPlace: "0.004400",
                    riskFreeDate: "0.004400",
                    premium: "0.004400",
                    change: "0.004400",
                    variation: "0.004400",
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 md:py-3 px-2 md:px-4">{row.tenor}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      {row.marketPlace}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      {row.riskFreeDate}
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">{row.premium}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4">{row.change}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      {row.variation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
