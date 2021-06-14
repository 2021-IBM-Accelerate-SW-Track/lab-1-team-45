//Component for entire content of To-Do List
import todo from '../todo/todo';
import Onetodo from './onetodo'

const todocontent = ({todos, setTodo}) => {
    return (
        <div>
            <ul>  
                {todos.map(todo => (
                    <Onetodo todos = {todos} setTodo = {setTodo} key ={todos.id} text ={todo.text} todo = {todo} />
                ))}
            </ul>
        </div>
    );
};

export default todocontent
