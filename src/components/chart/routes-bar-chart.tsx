import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";
import type { RoutesOutput } from "@/utils/api";
type ChartProps = {
  data: RoutesOutput | undefined;
  dataKey: string;
  xDataKey: string;
  yDataKey?: string;
};

function getCotationColor(cotation: string) {
  switch (cotation.charAt(0)) {
    case "4":
      return "fill-green-500";
    case "5":
      return "fill-blue-500";
    case "6":
      return "fill-violet-500";
    case "7":
      return "fill-red-500";
    default:
      return "fill-primary";
  }
}

console;

export default function Chart(props: ChartProps) {
  const { data, dataKey, xDataKey, yDataKey } = props;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis
          dataKey={xDataKey}
          fontSize={12}
          tickLine={true}
          axisLine={true}
        />
        <YAxis
          dataKey={yDataKey}
          fontSize={12}
          tickLine={true}
          axisLine={true}
        />
        <Tooltip labelClassName="text-rich-black" />
        <Bar dataKey={dataKey} radius={[4, 4, 0, 0]}>
          {data?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              className={getCotationColor(entry.cotation)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
