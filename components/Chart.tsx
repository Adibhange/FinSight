import {  Line } from "recharts";
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
            valueFormatter ? (value) => [valueFormatter(value as number), ""] : undefined
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
