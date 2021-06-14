import React from 'react';
import Header from "./component/header"
import Clock from "./component/clock"
import TaskList from "./component/task"
import './App.css';
import { Container, Box, Button } from '@material-ui/core';

function App() {
    return (
    <div>
        <Header/>
        <Container maxWidth="md">
            <TaskList/>
        </Container>
    </div>
    );
}

export default App;
