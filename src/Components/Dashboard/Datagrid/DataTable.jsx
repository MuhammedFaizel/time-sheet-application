import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2'
import { Card, Box, Typography, Grid } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,);

export default function DataTable() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container spacing={2} justifyContent="space-evenly" marginTop={0.5}>
        <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
      </Grid>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        TASKS
      </Typography>
      <Card style={{ padding: "30px", height: 380, width: '100%', borderRadius: "25px", overflow: 'hidden', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
        <Line
          data={{
            labels: [0, 1, 2, 3, 4, 5],
            datasets: [
              {
                data: [0, 2, 1, 3, 2, 5],
                label: "Internships",
                borderColor: "#5dbb1f",
                backgroundColor: "rgb(93, 187, 31)",
                color: "#5dbb1f",
                tension: 0,
              }, {
                data: [2, 1, 4, 0, 5, 1],
                label: "Companies",
                borderColor: "orange",
                backgroundColor: "orange",
                color: "orange",
                tension: 0
              },
            ]
          }}
          options={{
            elements: {
              point: { radius: 1, },
              line: { borderWidth: 3, },
            },
          }}
        />
      </Card>
    </Box>
  );
}
