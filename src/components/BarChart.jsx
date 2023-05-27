import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const Chart = ({ data, dataKey, bar1, bar2 }) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey={dataKey} height={30} stroke="#8884d8" startIndex={20} endIndex={40} />
          <Bar dataKey={bar2} fill="#82ca9d" />
          <Bar dataKey={bar1} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default Chart