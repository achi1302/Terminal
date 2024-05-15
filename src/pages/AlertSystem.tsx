import {Box, Button, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import React, {useState} from "react";
import {useDispatchTyped} from "@src/hooks";
import {setAlert} from "@redux/features";
import {Alerts} from "@src/components";

function AlertSystem() {
    const dispatch = useDispatchTyped();
    const [alertType, setAlertType] = useState("");
    const handleAlertChange = (event: SelectChangeEvent) => { //It runs when 'Select' value changes
        setAlertType(event.target.value); //Sets it to the value selected by the user
    };

    async function handleSubmit(e: any) {
        e.preventDefault();

        let msg = "";
        switch (alertType) {
            case "info":
                msg = "Alert Info";
                break;
            case "warning":
                msg = "Alert Warning";
                break;
            case "error":
                msg = "Alert Error";
                break;
            case "success":
                msg = "Alert Success";
                break;
            default:
                return;
        }

        dispatch(setAlert({ msg, alertType })); //Dispatch action to setAlert with the msg
    }



    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 3, backgroundColor: 'white', padding: 20 }}>
            <Alerts />
            <Select value={alertType} onChange={handleAlertChange}>
                <MenuItem value="info">Info</MenuItem>
                <MenuItem value="warning">Warning</MenuItem>
                <MenuItem value="error">Error</MenuItem>
                <MenuItem value="success">Success</MenuItem>
            </Select>
            <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>
                Show Alert
            </Button>



        </Box>



    );


}

export default AlertSystem;