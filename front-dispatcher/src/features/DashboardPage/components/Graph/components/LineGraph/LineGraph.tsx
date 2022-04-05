import React from "react";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";
import { colors } from "../../../../../../strings/colors";

interface lineProps {
  data: { name: string; value: number }[];
}
const LineGraph = ({ data }: lineProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset=".326" stop-color="#0058B9" />
            <stop offset="1.035" stop-color="#00b9ff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} scale="point" />
        <Area
          type="monotone"
          dataKey="value"
          stroke={colors.Blue}
          strokeWidth={4}
          fill={"url(#gradient)"}
          fillOpacity={0.15}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
