import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from './theme';

import  Sidebar  from './components/Sidebar';
import { TodoList, AlertSystem } from '@pages';
import { Alerts } from '@components/features';
import {Dashboard} from "@mui/icons-material";




const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Alerts />
            <Sidebar />
            <Router>
                <Routes>
                    <Route path = "/" element = { <AlertSystem/>} />
                    <Route path = "/todolist" element = { <TodoList/> } />
                </Routes>
            </Router>
        </ThemeProvider>



    );
}

export default App;

