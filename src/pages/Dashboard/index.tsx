import React from 'react'
import { CardContent, Grid } from '@mui/material'
import { GraphCard } from './style'
import { VerticalBarChart } from 'components/molecules/VerticalBarChart'
import { DefaultPieChart } from 'components/molecules/PieChart'
import { HorizontalBarChart } from 'components/molecules/HorizontalBarChart'
import { HorizontalLineChart } from 'components/molecules/HorizontalLineChart'
import { LabelPieChart } from 'components/molecules/LabelPieChart'
import { DefaultRadarChart } from 'components/molecules/RadarChart'
import { DefaultScatterChart } from 'components/molecules/ScatterChart'
import { HorizontalAreaChart } from 'components/molecules/HorizontalAreaChart'
import { DefaultFunnelChart } from 'components/molecules/FunnelChart'

export const Dashboard = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginTop: 0,
        marginBottom: 4,
        paddingY: 2,
        maxWidth: 'xl',
      }}
    >
      <Grid item xs={12} md={8}>
        <GraphCard>
          <CardContent>
            <VerticalBarChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <GraphCard>
          <CardContent>
            <HorizontalBarChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <GraphCard>
          <CardContent>
            <HorizontalLineChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <GraphCard>
          <CardContent>
            <HorizontalAreaChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <GraphCard>
          <CardContent>
            <DefaultPieChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <GraphCard>
          <CardContent>
            <LabelPieChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <GraphCard>
          <CardContent>
            <DefaultFunnelChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <GraphCard>
          <CardContent>
            <DefaultRadarChart />
          </CardContent>
        </GraphCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <GraphCard>
          <CardContent>
            <DefaultScatterChart />
          </CardContent>
        </GraphCard>
      </Grid>
    </Grid>
  )
}
