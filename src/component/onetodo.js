import React from 'react'
import todo from '../todo/todo';

const onetodo = ({text, todos, setTodo, todo}) => {
    const deleteItem = () => {
        setTodo(todos.filter((item) => item.id !== todo.id))
    };
    return (
        <div>
            <li>
                {text} 
            </li>
            <button onClick = {deleteItem}>Delete Item</button>
            <button>Edit Item</button>
            <input type = 'checkbox'></input>
        </div>
    )
}

export default onetodo
