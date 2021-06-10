import React from 'react';
import Header from "./component/header"
import Clock from "./component/clock"
import CheckboxList from "./component/checkboxes"
import './App.css';
import { Container, Box, Button } from '@material-ui/core';

function App() {
    return (
    <div>
        <Header/>
        <Container maxWidth="md">
            <Box>
                <Clock/>
            </Box>
            <Box>
                <CheckboxList/>
            </Box>
        </Container>
    </div>
    );
}

export default App;
