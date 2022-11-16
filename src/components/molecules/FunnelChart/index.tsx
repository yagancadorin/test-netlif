import React from 'react'
import { Box } from '@mui/material'
import {
  Tooltip,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Legend,
} from 'recharts'

const data = [
  {
    alfa: 100,
    name: 'A',
    fill: '#8884d8',
  },
  {
    alfa: 80,
    name: 'B',
    fill: '#83a6ed',
  },
  {
    alfa: 50,
    name: 'C',
    fill: '#8dd1e1',
  },
  {
    alfa: 40,
    name: 'D',
    fill: '#82ca9d',
  },
  {
    alfa: 26,
    name: 'E',
    fill: '#a4de6c',
  },
]

export const DefaultFunnelChart = () => {
  return (
    <Box component="section" sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey="alfa" data={data} isAnimationActive>
            <LabelList
              position="right"
              fill="#000"
              stroke="none"
              dataKey="name"
            />
          </Funnel>
          <Legend />
        </FunnelChart>
      </ResponsiveContainer>
    </Box>
  )
}
