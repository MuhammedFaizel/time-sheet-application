import React from 'react';
import { Chart as ChartJS, Legend, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { Card, Box, Typography, Grid, CardContent, Container } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DataTableTwo() {

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={2} justifyContent="space-evenly" marginTop={0.5}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                USER
            </Typography>
            <Card style={{ height: 380, width: '100%', borderRadius: "25px", overflow: 'hidden', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
                <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-10px" }}>
                    <Container style={{ width: "89%" }}>
                        <Doughnut
                            data={{
                                labels: ["Weekly Task Assigned", "Todays Task Assigned", "Weekly Task Assigned", "Weekly Task Assigned"],
                                datasets: [
                                    {
                                        data: [492, 320, 480, 520],
                                        backgroundColor: ["#5dbb1f", "orange", "#00a6ff", "#aa00ff"]
                                    }
                                ]
                            }}
                        />
                    </Container>
                </CardContent>
            </Card>
        </Box>
    );
}
