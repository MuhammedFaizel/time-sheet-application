import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Login from "./Components/Login/Login";

import Drawers from "./Components/Drawer/Drawer";
import Dashboard from "./Components/Dashboard/DashboardMain";

import TaskTable from "./Pages/Tables/TaskTable/TaskTable"
import TasksForm from "./Pages/Forms/Tasks/TasksForm";

import UserTable from "./Pages/Tables/User/UserTable"
import UserForm from "./Pages/Forms/User/UserForm";

import ReportMain from "./Pages/Report/ReportMain";
import TaskReport from "./Pages/Tables/Report/Task/TaskReport";
import UserReport from "./Pages/Tables/Report/User/UserReport";

const logged = localStorage.getItem("adminLoggedIn");
const AppRouter = () => {
    const [loggedIn, setLoggedIn] = useState(logged ? true : false)
    if (!loggedIn) {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </>
        )
    }

    return (
        <>
            <Box sx={{ display: "flex" }} >
                <Drawers setLoggedIn={setLoggedIn} />
                <Box component="main" style={{ flexGrow: 1, background: "#ffffff", minHeight: "100vh", maxHeight: "auto", boxShadow: "inset 2px 2px 20px #bebebe,-2px -2px 20px #ffffff", }} sx={{ pt: 10, px: 1 }}>
                    <Routes>

                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/tasktable" element={<TaskTable />} />
                        <Route path="/tasksform" element={<TasksForm />} />

                        <Route path="/usertable" element={<UserTable />} />
                        <Route path="/userform" element={<UserForm />} />

                        <Route path="/reportmain" element={<ReportMain />} />
                        <Route path="/taskreport" element={<TaskReport />} />
                        <Route path="/userreport" element={<UserReport />} />

                        <Route path="*" element={<Navigate to="/" replace />} />

                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default AppRouter;
