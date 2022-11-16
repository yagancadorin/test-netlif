import React from 'react'
import { Box } from '@mui/material'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const VerticalBarChart = () => {
  return (
    <Box component="section" sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#f5f5f5" />
          <XAxis tickMargin={12} dataKey="name" type="category" tickSize={0} />
          <YAxis tickMargin={12} type="number" tickSize={0} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={16} fill="#639b48" />
          <Bar dataKey="uv" barSize={16} fill="#6e6e6e" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
