import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert, Input } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TasksForm() {

    const navigate = useNavigate()

    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = React.useState(false);
    const [missing, setMissing] = useState(false);
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [proofofpayment, setProofofpayment] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => setOpen(false);

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const submit = () => {
        if (validate()) {
            tasks.push(data);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            setOpensnackbar(true);
            handleClose();
            navigate('/tasktable')
        } else {
            setMissing(true);
            handleClose();
        }
    }

    const validate = () => {
        let valid = true;
        let tempError = {};
        if (!data.employeename) {
            valid = false;
            tempError.employeename = true;
        }
        if (!data.projectname) {
            valid = false;
            tempError.projectname = true;
        }
        if (!data.starttime) {
            valid = false;
            tempError.starttime = true;
        }
        if (!data.endtime) {
            valid = false;
            tempError.endtime = true;
        }
        if (!data.totalhours) {
            valid = false;
            tempError.totalhours = true;
        }
        if (!data.typeofworks) {
            valid = false;
            tempError.typeofworks = true;
        }
        if (!valid) {
            setError(tempError)

        }
        return valid;
    }

    const handleClosesnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpensnackbar(false);
    };

    return (
        <>
            <Snackbar open={missing} autoHideDuration={6000} onClose={() => setMissing(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setMissing(false)} severity="error" sx={{ width: '100%' }}>
                    Please fill all the details
                </Alert>
            </Snackbar>
            <Card style={{ borderTop: "5px solid #dd1818", borderRadius: "15px", marginTop: "20px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                <CardContent>
                    <Grid container spacing={1} justifyContent="space-evenly">
                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <Link to="/tasktable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                TASK FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>

                            <Grid item xs={12} md={4}>
                                <TextField label="Employee Name" fullWidth variant="outlined" size='small' helperText={error.employeename ? "Please enter the Employee Name" : " "} value={data.employeename} onChange={(e) => handleChange(e, 'employeename')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Project Name" fullWidth variant="outlined" size='small' helperText={error.projectname ? "Please enter the Subscriber Name" : " "} value={data.projectname} onChange={(e) => handleChange(e, 'projectname')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Start Time" type="datetime-local" focused fullWidth variant="outlined" size='small' helperText={error.starttime ? "Please enter the Starting Time" : " "} value={data.starttime} onChange={(e) => handleChange(e, 'starttime')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="End Time" type="datetime-local" focused fullWidth variant="outlined" size='small' helperText={error.endtime ? "Please enter the Ending Time" : " "} value={data.endtime} onChange={(e) => handleChange(e, 'endtime')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Total Hours" type="number" fullWidth variant="outlined" size='small' helperText={error.totalhours ? "Please enter the Total Hours" : " "} value={data.totalhours} onChange={(e) => handleChange(e, 'totalhours')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Type of Works" type="number" fullWidth variant="outlined" size='small' helperText={error.typeofworks ? "Please enter the Type of Works" : " "} value={data.typeofworks} onChange={(e) => handleChange(e, 'typeofworks')} />
                            </Grid>

                            <Grid item xs={12} md={8} >
                                <Button variant="outlined" fullWidth component="span" size="small" marginBottom="10px" style={{ textTransform: "none", color: "#3b4a54" }}>
                                    Upload The Output
                                    <Input accept="image/*" id="outlined-button-file" multiple type="file" style={{ marginLeft: "10px" }} value={data.output} onChange={(event) => setProofofpayment(event.target.files[0])} />
                                </Button>
                            </Grid>

                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
                                <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: "#194d33" }}>
                                    Submit
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Are you sure want to submit this form ?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="outlined" color="error" onClick={handleClose}> Cancel </Button>
                                        <Button onClick={submit} autoFocus variant="contained" style={{ backgroundColor: "#194d33" }}>
                                            Submit
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                                <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                                    <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                                        Saved Successfully
                                    </Alert>
                                </Snackbar>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
