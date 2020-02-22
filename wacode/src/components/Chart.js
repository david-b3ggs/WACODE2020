import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Text
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(xname, company, emission) {
  return { xaxis: xname, c: company, e: emission };
}

const data = [
  createData("00:00", 100, 100),
  createData("03:00", 300, 400),
  createData("06:00", 600, 500),
  createData("09:00", 800, 300),
  createData("12:00", 1500, 4500),
  createData("15:00", 2000, 4000),
  createData("18:00", 2400, 700),
  createData("21:00", 2400, 0)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Stock Price vs CO2 Emissions</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          width={1000}
          height={1000}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis
            label={
              <Text x={0} y={0} dx={15} dy={100} offset={0} angle={-90}>
                ppm/$
              </Text>}
          ></YAxis>
          <Line
            type="monotone"
            dataKey="e"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="c" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
