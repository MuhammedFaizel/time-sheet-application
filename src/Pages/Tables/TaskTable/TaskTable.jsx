import React from "react";
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Grid, Card, Button, Box, Typography, InputBase } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

const columns = [
    { field: "id", headerName: "ID", width: 10 },
    {
        field: "employeename",
        headerName: "Employee Name",
        width: 150,
        editable: false
    },
    {
        field: "projectname",
        headerName: "Project Name",
        width: 150,
        editable: false
    },
    {
        field: "starttime",
        headerName: "Start Time",
        width: 170,
        editable: false
    },

    {
        field: "endtime",
        headerName: "End Time",
        width: 170,
        editable: false
    },

    {
        field: "totalhours",
        headerName: "Total Hours",
        width: 100,
        editable: false
    },

    {
        field: "typeofworks",
        headerName: "Type of Works",
        width: 150,
        editable: false
    },

    {
        field: "output",
        headerName: "Output",
        width: 150,
        editable: false
    },

    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => (
            <strong>
                <LightTooltip title="View" placement="top">
                    <IconButton>
                        <VisibilityIcon style={{ marginRight: 4, color: "#0693e3" }} />
                    </IconButton>
                </LightTooltip>

                <LightTooltip title="Edit" placement="top">
                    <IconButton>
                        <EditIcon style={{ marginRight: 4, color: "#fcb900" }} />
                    </IconButton>
                </LightTooltip>

                <LightTooltip title="Delete" placement="top">
                    <IconButton>
                        <DeleteIcon style={{ marginRight: 4, color: "red" }} />
                    </IconButton>
                </LightTooltip>
            </strong>
        )
    }
];

const rows = localStorage.getItem("tasks") && JSON.parse(localStorage.getItem("tasks")).map((value, index) => {
    const formattedStartDate = moment(value.starttime).format('DD/MM/YYYY, h:mm a');
    const formattedEndDate = moment(value.endtime).format('DD/MM/YYYY, h:mm a');
    return ({
        id: index + 1,
        employeename: value.employeename,
        projectname: value.projectname,
        starttime: formattedStartDate,
        endtime: formattedEndDate,
        totalhours: value.totalhours,
        typeofworks: value.typeofworks,
    })
})

const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        borderColor: alpha(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    border: 1,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "5%",
    borderColor: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        border: 1,
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function TaskTable() {
    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Card style={{ background: "#ffffff", boxShadow: " 2px 2px 20px #bebebe,-2px -2px 20px #ffffff", marginTop: 10, marginBottom: 60, padding: "0 2% 0 2%", borderRadius: 35 }}
                sx={{ width: "100%", height: 550, overflowY: 'scroll' }}>
                <Grid container spacing={1} justifyContent="space-evenly">
                    <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 25 }}>
                        <Link to="/">
                            <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#194d33" }} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#555555", fontSize: "30px" }} align="center">
                            TASK DETAILS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Search style={{ color: "#194d33" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search???" style={{ border: "1px solid", borderColor: "#e0e0e0", borderRadius: "25px", width: "100%" }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                    <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center", justifyContent: "end", marginTop: "13px" }}>
                        <LightTooltip title="Add" placement="right">
                            <Link to="/tasksform" style={{ textDecoration: "none" }}>
                                <Button variant="contained" style={{ boxShadow: "1px 1px  10px #888888", backgroundColor: "#194d33" }} >Add New Task</Button>
                            </Link>
                        </LightTooltip>
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
