import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import { TextField, Input, InputBase, Checkbox } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';


export default function TaskList() {
    const storedTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")).map((t) => { return {...t, time: new Date(t.time)}}) : [];
    const [tasks, setTasks] = React.useState(storedTasks);  
    const [taskcontents, setTaskContents] = React.useState("");
    const [inputVal, setInputVal] = React.useState(false);
    const [edited, setEdited] = React.useState({});

    React.useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    }, [tasks] )

    const updateTaskContents = (e) => {
        setTaskContents(e.target.value);
        console.log(e.target.value);
        if (tasks.filter(t => t.task.trim() === taskcontents.trim()).length !== 0) {
            setInputVal(true);
        }
        else {
            setInputVal(false);
        }
    }

    const addTask = (e) => {
        if (tasks.filter(t => t.task.trim() === taskcontents.trim()).length === 0) {
            let ctime = new Date();
            setTasks([...tasks, {task: taskcontents, time: ctime, id: ctime.toISOString() + taskcontents, checked: false}]);
            setTaskContents("");
            setInputVal(false);
        }
        else {
            setInputVal(true);
        }
    }

    const clearTasks = (e) => {
        setTasks([]);
    }

    function toggleTask (id) {  
        const updatedTasks = tasks.map((t) => {
            return t.id === id ? {...t, checked: !t.checked} : t;
        }
        );
        setTasks(updatedTasks);
    }

    function deleteTask (id) {  
        const updatedTasks = tasks.filter(t => t.id !== id);
        setTasks(updatedTasks);
    }

    function editTask (id) {
        console.log(id);
    }

    function Task (id, task, time, checked) {
        return (
        <ListItem key={task}>
            <ListItemIcon>
                <Checkbox
                checked={checked}
                tabIndex={-1}
                onClick={() => toggleTask(id)}
                />
            </ListItemIcon>

            <ListItemText 
                id={id}
                primary={task}
                secondary={time.toLocaleString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
            />

            <ListItemSecondaryAction pl="1em">
                <IconButton 
                    onClick={() => editTask(id)} 
                    aria-label="edit"> 
                    <EditIcon />
                </IconButton>
                <IconButton 
                    onClick={() => deleteTask(id)} 
                    aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        );
    }

    return (
        <Box>
            <Box display="flex" p="1em">
                <Box width="100%" mr="1.5em">
                    <TextField
                        data-testid="new-item-input"
                        error={inputVal} 
                        helperText={inputVal ? "Task already exists" : null}
                        fullWidth multiline placeholder="Task" 
                        value={taskcontents} 
                        onChange={updateTaskContents}
                    />
                </Box>
                <Box flexShrink={1}>
                    <Button data-testid="new-item-button" variant="contained" color="primary" onClick={addTask} aria-label="add task" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                </Box>
            </Box>
            <Box p="1em">
                <Button variant="contained" color="secondary" onClick={clearTasks}>
                    Clear
                </Button>
            </Box>

            <List>{
                tasks.map(t => Task(t.id, t.task, t.time, t.checked))
            }</List>

        </Box>
    );
}


