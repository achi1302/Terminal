import React from 'react';
import { useDispatch } from 'react-redux';
import {Drawer, List, ListItem, ListItemText } from '@mui/material';
import { toggleTodo } from '@src/redux/features/todolist/slice';
import { useAppSelector } from '@src/hooks';
import { RootState } from '@src/redux/store';

const Sidebar = () => {
    const todos = useAppSelector((state: RootState) => state.todo.notification);
    const dispatch = useDispatch();

    const handleToggle = (id: string) => {
        dispatch(toggleTodo(id));
    };

    return (
        <Drawer variant="permanent" open>
            <List style={{ width: '250px' }}>
                {todos.map((item) => (
                    <ListItem button key={item.id} onClick={() => handleToggle(item.id)}>
                        <ListItemText
                            primary={item.task}
                            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;