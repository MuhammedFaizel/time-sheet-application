
import React from 'react';
import { Card, CardContent, Typography, Grid, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import TaskReport from './Task/TaskReport';
import UserReport from './User/UserReport';



export default function ReportMain() {
  return (
    <>
      <Card style={{ borderTop: "5px solid red", borderRadius: "15px", marginTop: "20px", alignItems: "stretch", minHeight: "50%" }} sx={{ width: 500, height: 530, overflowY: 'scroll', minWidth: "100%" }} >
        <CardContent>
          <Grid container spacing={1} justifyContent="space-evenly">
            <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <Link to="/">
                <ArrowBackIcon sx={{ fontSize: 30, color: "#29166f" }} />
              </Link>
            </Grid>

            <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ marginLeft: "-50px", fontSize: "40px" }}>
                REPORTS
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TaskReport />
            </Grid>

            <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <UserReport />
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  )
}