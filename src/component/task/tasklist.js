import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import { Input, Checkbox } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


export default function TaskList() {
    const storedTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")).map((t) => { return {...t, time: new Date(t.time)}}) : [];
    const [tasks, setTasks] = React.useState(storedTasks);  
    const [taskcontents, setTaskContents] = React.useState("");

    React.useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks] )

    const updateTaskContents = (e) => {
        setTaskContents(e.target.value);
    }

    const addTask = (e) => {
        let ctime = new Date();
        setTasks([...tasks, {task: taskcontents, time: ctime, id: ctime.toISOString(), checked: false}]);
        setTaskContents("");
    }

    const clearTasks = (e) => {
        setTasks([]);
    }

    function toggleTask (time) {  
        const updatedTasks = tasks.map((t) => {
            console.log(t);
            console.log(t.time== time);
            console.log(!t.checked);
            return t.time === time ? {...t, checked: !t.checked} : t;
        }
        );
        setTasks(updatedTasks);
    }

    function Task (id, task, time, checked) {
        return (
        <ListItem key={task}>
            <ListItemIcon>
                <Checkbox
                checked={checked}
                tabIndex={-1}
                onClick={() => toggleTask(time)}
                />
            </ListItemIcon>

            <ListItemText 
                id={id}
                primary={task}
                secondary={time.toLocaleString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
            />
        </ListItem>
        );
    }

    return (
        <Box>
            <List>{
                tasks.map(t => Task(t.id, t.task, t.time, t.checked))
            }</List>

            <Box display="flex" p="1em">
                <Box width="100%" mr="1.5em">
                    <Input fullWidth multiline placeholder="Task" value={taskcontents} onChange={updateTaskContents}/>
                </Box>
                <Box flexShrink={1}>
                    <Button variant="contained" color="primary" onClick={addTask} aria-label="add task" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                </Box>
            </Box>
            <Box p="1em">
                <Button variant="contained" color="secondary" onClick={clearTasks}>
                    Clear
                </Button>
            </Box>
        </Box>
    );
}


