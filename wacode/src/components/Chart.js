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

function genData() {
  return ([
    createData("00:00", Math.random(), Math.random()),
    createData("03:00", Math.random(), Math.random()),
    createData("06:00", Math.random(), Math.random()),
    createData("09:00", Math.random(), Math.random()),
    createData("12:00", Math.random(), Math.random()),
    createData("15:00", Math.random(), Math.random()),
    createData("18:00", Math.random(), Math.random()),
    createData("21:00", Math.random(), Math.random())
  ]);
}

export default function Chart(props) {
  const theme = useTheme();
  let data = genData();

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
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
              </Text>
            }
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
