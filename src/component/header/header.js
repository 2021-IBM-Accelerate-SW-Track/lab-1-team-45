import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './header.css'

export default function Header(){
    return (
    <Box className='headerbox' component="div" p="1.5em" mb="2em">
        <Container maxWidth="md">
            Group 45 To-Do List    
        </Container>
    </Box>
    );
}
