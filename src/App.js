import React from 'react';
import Header from "./component/header"
import './App.css';
import { Container, Box, Button } from '@material-ui/core';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            created: new Date(),
            updated: new Date() 
        };
    }

    updateTime = () => {
        console.log(this.state.created);
        this.setState({
            updated: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Updated at {this.state.updated.toLocaleTimeString()}.</h2>
                <p>Created {this.state.created.toLocaleString()}.</p>
                <Button variant="contained" color="primary" onClick={this.updateTime}>Update</Button>
            </div>
        );
    }
}


function App() {
    return (
    <div>
        <Header/>
        <Container maxWidth="md">
            <Box>
                <Clock/>
            </Box>
        </Container>
    </div>
    );
}

export default App;
