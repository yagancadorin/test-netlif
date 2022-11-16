import React from 'react'
import { Box } from '@mui/material'
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
  {
    name: 'Page D',
    pv: 3908,
  },
  {
    name: 'Page E',
    pv: 4800,
  },
  {
    name: 'Page F',
    pv: 3800,
  },
  {
    name: 'Page G',
    pv: 4300,
  },
]

export const HorizontalBarChart = () => {
  return (
    <Box component="section" sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <CartesianGrid vertical={false} stroke="#f5f5f5" />
          <XAxis tickMargin={12} type="number" tickSize={0} />
          <YAxis tickMargin={12} dataKey="name" type="category" tickSize={0} />
          <Tooltip />
          <Bar
            dataKey="pv"
            barSize={16}
            fill="#639b48"
            radius={[0, 16, 16, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
