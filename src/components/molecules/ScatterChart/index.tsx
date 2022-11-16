import React from 'react'
import { Box } from '@mui/material'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
]

export const DefaultScatterChart = () => {
  return (
    <Box component="section" sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid vertical={false} stroke="#f5f5f5" />
          <XAxis
            tickMargin={12}
            tickSize={0}
            type="number"
            dataKey="x"
            name="stature"
            unit="cm"
          />
          <YAxis
            tickMargin={12}
            tickSize={0}
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data} fill="#639b48" />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  )
}
