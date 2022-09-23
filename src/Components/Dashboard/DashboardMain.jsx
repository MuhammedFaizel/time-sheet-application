import React from 'react';
import { Card, Box, Typography, Avatar, Container, Grid } from '@mui/material';
import DatagridOne from './Datagrid/DataTable';
import DatagridTwo from './Datagrid/DataTableTwo';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleIcon from '@mui/icons-material/People';

function DashboardContent() {

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} marginTop={5}>
          <Grid item xs={12} md={3} lg={3} >
            <Card sx={{ p: 2, display: 'flex', height: 140, }} style={{
              borderRadius: "25px", background: "linear-gradient(145deg, #e6e6e6, #ffffff)", boxShadow: "23px 23px 61px #d9d9d9, -23px -23px 61px #ffffff",
              display: 'flex', alignItems: "center", justifyContent: "center",
            }}>
              <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ color: "#67748e" }}>
                  Todays Task
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold">
                  10{" "}
                </Typography>
              </Grid>
              <Avatar style={{ background: "linear-gradient(to right, #1488cc, #2b32b2)" }}>
                <AddTaskIcon />
              </Avatar>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} >
            <Card sx={{ p: 2, display: 'flex', height: 140, }} style={{
              borderRadius: "25px", background: "linear-gradient(145deg, #e6e6e6, #ffffff)", boxShadow: "23px 23px 61px #d9d9d9, -23px -23px 61px #ffffff",
              display: 'flex', alignItems: "center", justifyContent: "center",
            }}>
              <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ color: "#67748e" }}>
                  Total Tasks Assigned
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold">
                  30{" "}
                </Typography>
              </Grid>
              <Avatar style={{ background: "linear-gradient(to right, #1488cc, #2b32b2)" }}>
                <TaskAltIcon />
              </Avatar>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} >
            <Card sx={{ p: 2, display: 'flex', height: 140, }} style={{
              borderRadius: "25px", background: "linear-gradient(145deg, #e6e6e6, #ffffff)", boxShadow: "23px 23px 61px #d9d9d9, -23px -23px 61px #ffffff",
              display: 'flex', alignItems: "center", justifyContent: "center",
            }}>
              <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ color: "#67748e" }}>
                  Total Tasks Completed
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold">
                  50{" "}
                </Typography>
              </Grid>
              <Avatar style={{ background: "linear-gradient(to right, #1488cc, #2b32b2)" }}>
                <AssignmentTurnedInIcon />
              </Avatar>
            </Card>
          </Grid>

          <Grid item xs={12} md={3} lg={3} >
            <Card sx={{ p: 2, display: 'flex', height: 140, }} style={{
              borderRadius: "25px", background: "linear-gradient(145deg, #e6e6e6, #ffffff)", boxShadow: "23px 23px 61px #d9d9d9, -23px -23px 61px #ffffff",
              display: 'flex', alignItems: "center", justifyContent: "center",
            }}>
              <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ color: "#67748e" }}>
                  Total Employees
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold">
                  20{" "}
                </Typography>
              </Grid>
              <Avatar style={{ background: "linear-gradient(to right, #1488cc, #2b32b2)" }}>
                <PeopleIcon />
              </Avatar>
            </Card>
          </Grid>

        </Grid>
      </Container>

      <Box mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <DatagridOne />
          </Grid>

          <Grid item xs={12} lg={6}>
            <DatagridTwo />
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}