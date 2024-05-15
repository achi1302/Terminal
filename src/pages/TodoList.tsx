import {useDispatchTyped} from "@src/hooks";
import React, {useState} from "react";
import {addTodo} from "@redux/features";
import {Box, Button, MenuItem, Select, TextField} from "@mui/material";
import {Alerts, Todos} from "@src/components";

function TodoList () {
    const dispatch = useDispatchTyped();
    const [todoTask, setTodoTask] = useState("");

    const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoTask(event.target.value);
    };

    const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(addTodo({ task: todoTask, completed: false }));
        setTodoTask("");
    }

    return (
        <Box component="form" onSubmit={handleSubmitTodo} sx={{
            width: '100%',
            mt: 3,
            backgroundColor: 'white',
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh' }}>
            <Todos />
            <TextField id="outlined-basic" label="Todo" variant="outlined" value={todoTask} onChange={handleTodoChange} />
            <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>
                Add Todo
            </Button>
        </Box>




    );
}

export default TodoList;