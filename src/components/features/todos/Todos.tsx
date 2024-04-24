import React, {useEffect} from 'react';
import { RootState } from '@src/redux/store';
import {removeTodo, addTodo} from '@src/redux/features/todolist';
import { useDispatchTyped ,useAppSelector } from '@src/hooks';
import {toggleTodo} from "@redux/features/todolist";
const Todos: React.FC = () => {
    const todos = useAppSelector((state: RootState) => state.todo.notification);
    const dispatch = useDispatchTyped();

    const handleComplete = (id: string) => {
        dispatch(toggleTodo(id));
    };

    useEffect(() => {
        todos.forEach((todo) => {
            const timer = setTimeout(() => {
                handleComplete(todo.id);
            }, 40000);

            // Cleanup when component is unmounted or a todo is complete
            return () => {
                clearTimeout(timer);
            };
        });
    }, [todos, dispatch]);
    return (
        <div style={{ position: 'fixed', top: 65, right: 20,  padding: 10, zIndex: 100000000}}>
            {todos.map((todo) => {
                const { id, task, completed } = todo;

                return (
                    <div key={id} onClick={() => dispatch(toggleTodo(id))} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;