import React, { useState } from 'react';
import {addTodo, setAlert} from "@redux/features";
import { useDispatchTyped } from "@src/hooks";
import { Alerts } from "@src/components";
import { Todos } from "@src/components";
import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from '@mui/material';




const App: React.FC = () => {
    const dispatch = useDispatchTyped();
    const [alertType, setAlertType] = useState(""); //Initial state an empty string
    const [todoTask, setTodoTask] = useState("");
    const handleAlertChange = (event: SelectChangeEvent) => { //It runs when 'Select' value changes
        setAlertType(event.target.value); //Sets it to the value selected by the user
    };

    const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoTask(event.target.value);
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

    const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(addTodo({ task: todoTask, completed: false }));
        setTodoTask("");
    }

    return (
        <Box component="form" onSubmit={handleSubmitTodo} sx={{ width: '100%', mt: 3, backgroundColor: 'white', padding: 20 }}>
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


            <Todos />
            <TextField id="outlined-basic" label="Todo" variant="outlined" value={todoTask} onChange={handleTodoChange} />
            <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>
                Add Todo
            </Button>

        </Box>



    );
}

export default App;

