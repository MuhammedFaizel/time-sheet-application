import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function UserForm() {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = React.useState(false);
    const [missing, setMissing] = useState(false);
    const [opensnackbar, setOpensnackbar] = useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => setOpen(false);

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const submit = () => {
        if (validate()) {
            setOpensnackbar(true);
            handleClose();

        } else {
            setMissing(true);
            handleClose();
        }
    }

    const validate = () => {
        let valid = true;
        let tempError = {};
        if (!data.username) {
            valid = false;
            tempError.username = true;
        }
        if (!data.emailid) {
            valid = false;
            tempError.emailid = true;
        }
        if (!data.password) {
            valid = false;
            tempError.password = true;
        }
        if (!data.confirmpassword) {
            valid = false;
            tempError.confirmpassword = true;
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
                            <Link to="/usertable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                USER FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>

                            <Grid item xs={12} md={4}>
                                <TextField label="User Name" fullWidth variant="outlined" size='small' helperText={error.username ? "Please enter the User Name" : " "} value={data.username} onChange={(e) => handleChange(e, 'username')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Email Id" type="email" fullWidth variant="outlined" size='small' helperText={error.emailid ? "Please enter the Email Id" : " "} value={data.emailid} onChange={(e) => handleChange(e, 'emailid')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Password" fullWidth variant="outlined" size='small' helperText={error.password ? "Please enter the Password" : " "} value={data.password} onChange={(e) => handleChange(e, 'password')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Confirm Password" type="password" fullWidth variant="outlined" size='small' helperText={error.confirmpassword ? "Please enter the COnfirm Password" : " "} value={data.confirmpassword} onChange={(e) => handleChange(e, 'confirmpassword')} />
                            </Grid>

                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
                                <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: "#194d33" }}>
                                    Submit
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description">
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
