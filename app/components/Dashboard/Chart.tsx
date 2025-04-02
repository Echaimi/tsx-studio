"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "1", value1: 10, value2: 15, value3: 8 },
  { day: "5", value1: 20, value2: 18, value3: 12 },
  { day: "10", value1: 15, value2: 22, value3: 15 },
  { day: "15", value1: 25, value2: 28, value3: 20 },
  { day: "20", value1: 30, value2: 25, value3: 25 },
  { day: "25", value1: 45, value2: 30, value3: 28 },
];

export function FinancialChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[500px]">
        <LineChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
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
      <div className="flex gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#22c55e]"></div>
          <span className="text-sm text-gray-600">Lorem ipsum</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#06b6d4]"></div>
          <span className="text-sm text-gray-600">Lorem ipsum</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#f97316]"></div>
          <span className="text-sm text-gray-600">Lorem ipsum</span>
        </div>
      </div>
    </div>
  );
}
