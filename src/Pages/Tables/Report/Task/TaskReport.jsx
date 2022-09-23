import React from "react";
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import { Grid, Card, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "membershipid",
        headerName: "Membership Id",
        width: 150,
        editable: true
    },
    {
        field: "reason",
        headerName: "Reason",
        width: 150,
        editable: true
    },
    {
        field: "noyearsmembership",
        headerName: "No: Years of Membership",
        type: "number",
        width: 210,
        editable: true
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.membershipid || ""} ${params.row.reason || ""}`
    },
];

const rows = [
    { id: 1, reason: "Hi", membershipid: "Jon", noyearsmembership: 35 },
    { id: 2, reason: "Lannister", membershipid: "Cersei", noyearsmembership: 42 },
    { id: 3, reason: "Lannister", membershipid: "Jaime", noyearsmembership: 45 },
    { id: 4, reason: "Stark", membershipid: "Arya", noyearsmembership: 16 },
    { id: 5, reason: "Targaryen", membershipid: "Daenerys", noyearsmembership: null },
    { id: 6, reason: "Melisandre", membershipid: null, noyearsmembership: 150 },
    { id: 7, reason: "Clifford", membershipid: "Ferrara", noyearsmembership: 44 },
    { id: 8, reason: "Frances", membershipid: "Rossini", noyearsmembership: 36 },
    { id: 9, reason: "Roxie", membershipid: "Harvey", noyearsmembership: 65 }
];

export default function TaskReport() {
    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Card style={{ background: "#ffffff", boxShadow: " 2px 2px 20px #bebebe,-2px -2px 20px #ffffff", marginTop: 10, marginBottom: 60, padding: "0 2% 0 2%", borderRadius: 35 }}
                sx={{ width: "100%", height: 550, overflowY: 'scroll' }}>
                <Grid container spacing={1} justifyContent="space-evenly">
                    <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 25 }}>
                        <Link to="/reportmain">
                            <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#194d33" }} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#555555", fontSize: "30px" }} align="center">
                            TASK DETAILS
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="space-evenly" marginTop={1}>
                    <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
                </Grid>
                <div style={{ height: 350, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        components={{ Toolbar: GridToolbar }}
                    />
                </div>
            </Card>
        </Box>

    );
}
