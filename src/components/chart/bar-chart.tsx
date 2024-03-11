import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type ChartProps = {
  data: unknown[] | undefined;
  dataKey: string;
  xDataKey: string;
  yDataKey?: string;
};

export default function Chart(props: ChartProps) {
  const { data, dataKey, xDataKey, yDataKey } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ right: 0, left: 0 }}>
        <XAxis
          dataKey={xDataKey}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey={yDataKey}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey={dataKey} radius={[4, 4, 0, 0]} className="fill-primary" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
