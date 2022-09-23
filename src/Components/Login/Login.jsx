import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import Typography from '@mui/material/Typography';
import Back from "../../assets/images/Back.jpg"
import Logo from "../../assets/images/Logomain.jpeg";

const userid = "admin"
const password = "admin"

export default function Login({ setLoggedIn }) {

    const [data, setData] = useState({});
    const [error, setError] = useState({})
    const [missing, setMissing] = useState(false)
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => { setOpen(false); };

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const validate = () => {
        let valid = true;
        let tempError = {};
        if (!data.userid) {
            valid = false;
            tempError.userid = true;
        }
        if (!data.password) {
            valid = false;
            tempError.password = true;
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

    const login = () => {
        if (validate()) {
            //API CAll
            if (data.userid === userid && data.password === password) {
                setLoggedIn(true)
                localStorage.setItem("adminLoggedIn", "true")
                handleClose();
            } else if (data.userid === "user" && data.password === "user") {
                setLoggedIn(true)
                localStorage.setItem("userLoggedIn", "true")
                handleClose();
            } else {
                setOpen(true)
                handleClose();
            }
        }
    }

    return (
        <>
            <Snackbar open={missing} autoHideDuration={6000} onClose={() => setMissing(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setMissing(false)} severity="error" sx={{ width: '100%' }}>
                    Please fill all the details
                </Alert>
            </Snackbar>

            <Grid container spacing={2} style={{ backgroundImage: `url(${Back})`, backgroundPosition: "center", backgroundSize: "cover", opacity: 5, display: "flex", alignItems: "center", justifyContent: "center", margin: "center", height: "100vh", width: "100", marginTop: "0.5px" }}>
                <Card sx={{ width: 600, height: 300 }} style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
                    <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 3 }}>
                        <img src={Logo} alt="Logo" height="150px" />
                        <Typography align="center" style={{ fontFamily: 'Poppins', fontSize: "20px", fontWeight: "bold", color: "#1f6b8d", }}>
                            Time Sheet Capturing Application
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 3 }}>
                        <CardContent>
                            <Typography style={{ fontFamily: 'Poppins', fontSize: "30px", fontWeight: "bold", color: "#36c863" }} gutterBottom>
                                Login
                            </Typography>

                            <Grid item xs={12} md={12}>
                                <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#1f6b8d" }}>
                                    User ID
                                </Typography>
                                <TextField fullWidth variant="outlined" size="small" helperText={error.userid ? "Please enter the User ID" : " "}
                                    InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.userid} onChange={(e) => handleChange(e, 'userid')} />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#1f6b8d" }}>
                                    Password
                                </Typography>
                                <TextField fullWidth variant="outlined" type={"password"} size="small" helperText={error.password ? "Please enter the Password" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.password} onChange={(e) => handleChange(e, 'password')} />
                            </Grid>

                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5px" }}>
                                <Button variant="contained" onClick={login} style={{ backgroundColor: "#1f6b8d", width: "150px", borderRadius: 15, height: "35px" }}>
                                    Login
                                </Button>
                            </Grid>
                            <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                                <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                                    Saved Successfully
                                </Alert>
                            </Snackbar>

                        </CardContent>
                    </Grid>
                </Card>
            </Grid>
        </>
    )
}
