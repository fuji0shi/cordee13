import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";

type ChartProps = {
  data: unknown[] | undefined;
  dataKey: string;
  xDataKey: string;
  yDataKey?: string;
};

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
          {data?.map((_, index) => (
            <Cell key={`cell-${index}`} className="fill-primary" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
