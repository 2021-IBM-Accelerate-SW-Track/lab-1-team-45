import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function Header(){
    return (
    <Box component="div" bgcolor="primary.main" color="white" p="1.5em" mb="2em">
        <Container maxWidth="md">
            2021 IBM Accelerate Software Track Lab Boiler Plate
        </Container>
    </Box>
    );
}
