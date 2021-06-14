//Component for each Item in To-Do List 
const todo = ({setInputText, todos, setTodo, inputText}) => { //Allows todo form to access from app.js
    const userText = (e) =>{
        console.log(e.target.value); 
        setInputText(e.target.value); //Sets Input text = to value entered in input field 
    };

    const enterUserText = (e)=> {
        e.preventDefault(); //Prevents webpage from reloading every time button press occurs
        setTodo([...todos, {text:inputText, completed:false, id: Math.random() * 1000}]); //Come back later to change to create random id for each entry 
        setInputText(''); //Reset input text to empty once entry is logged 
    };

    return (

        <form>
        <input  value = {inputText} onChange = {userText} type = 'text' placeholder = 'Enter new item here'></input> 
        <button onClick ={enterUserText} type = 'submit'>Add Item</button>
        </form>
      )
}

export default todo
