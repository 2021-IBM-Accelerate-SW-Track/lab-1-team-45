import React from 'react';
import Header from "./component/header"
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
        <Box mb="3em"></Box>
    </div>
    );
}

export default App;
