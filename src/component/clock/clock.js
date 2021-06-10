import React from "react";
import { Box, Button } from '@material-ui/core';

export default function Clock() {
    const [created, setCreated] = React.useState(new Date());
    const [updated, setUpdated] = React.useState(new Date());

    const updateTime = (e) => {
        console.log(created);
        setUpdated(new Date());
    }

    return (
        <div>
            <h2>Updated at {updated.toLocaleTimeString()}.</h2>
            <p>Created {created.toLocaleString()}.</p>
            <Button variant="contained" color="primary" onClick={updateTime}>Update</Button>
        </div>
    );
}

