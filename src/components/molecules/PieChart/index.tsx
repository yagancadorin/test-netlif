import React from 'react'
import { Box } from '@mui/material'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Group A', value: 400, color: '#6e6e6e' },
  { name: 'Group B', value: 300, color: '#639b48' },
  { name: 'Group C', value: 300, color: '#0f570d' },
  { name: 'Group D', value: 200, color: '#ffe191' },
]

const renderCustomLabel = (props: any) => {
  const { cx, cy } = props

  return (
    <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#666">
      60%
    </text>
  )
}

export const DefaultPieChart = () => {
  return (
    <Box component="section" sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomLabel}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip viewBox={{ x: 0, y: 0, width: 400, height: 400 }} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  )
}
