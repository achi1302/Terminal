import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

interface TodoState {
    notification: Todo[];
}

const initialState: TodoState = {
    notification: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
            const id = uuidv4(); // Generate a unique ID
            const newTodo: Todo = { ...action.payload, id, completed: action.payload.completed ?? false };
            state.notification.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<string>) => { // action payload is the id of the todo
            const index = state.notification.findIndex((todo) => todo.id === action.payload);
            if (index !== -1)
                state.notification[index].completed = !state.notification[index].completed;
        },
        removeTodo: (state, action: PayloadAction<string>) => { // action payload is the id of the todo
            state.notification = state.notification.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo,removeTodo  } = todoSlice.actions;
export default todoSlice.reducer;
export { todoSlice };