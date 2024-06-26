import React from 'react';
import { SparkLineChart } from '@mui/x-charts';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';



const SparkLine = ({ data }) => {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={100}
        />
      </Box>
    </Stack>
  )
}

export default SparkLine