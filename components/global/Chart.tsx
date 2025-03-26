"use client";

import { Cell, Line, Pie, PieChart } from "recharts";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
} from "recharts";

interface ChartData {
  name: string;
  [key: string]: number | string;
}

interface LineChartProps {
  data: ChartData[];
  categories: string[];
  colors: string[];
  yAxisWidth?: number;
  showLegend?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGridLines?: boolean;
  valueFormatter?: (value: number) => string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  categories,
  colors,
  yAxisWidth = 30,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
  valueFormatter,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
        {showXAxis && <XAxis dataKey="name" />}
        {showYAxis && (
          <YAxis width={yAxisWidth} tickFormatter={valueFormatter} />
        )}
        <Tooltip
          formatter={
            valueFormatter
              ? (value) => [valueFormatter(value as number), ""]
              : undefined
          }
        />
        {showLegend && <Legend />}
        {categories.map((category, index) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[index % colors.length]}
            activeDot={{ r: 8 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

const COLORS = [
  "#0ea5e9",
  "#14b8a6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#22c55e",
  "#eab308",
  "#6366f1",
  "#ec4899",
];

interface PieChartProps {
  data: { name: string; value: number }[];
}

export const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="h-[300px]">
      {data.length === 0 ? (
        <p className="text-muted-foreground py-4 text-center">
          No expenses this month
        </p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: $${value.toFixed(2)}`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `$${(value as number).toFixed(2)}`}
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
