import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function ToDoList(){

    let [todos,setTodos] = useState([{tasks: "Sample Task", id: uuidv4(), isDone: false}]);
    let [newTodo,setNewTodo] = useState("");

    let newTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {tasks: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
            return {
                ...todo,
                tasks: todo.tasks.toUpperCase(),
                isDone: true,
            }})
        ));
    }

    let markAsDone = (id) => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        tasks: todo.tasks.toUpperCase(),
                        isDone: true,
                    }
                }
                else{
                    return todo;
                }
            })
        ));
    }

    return(
        <div>
            <input placeholder="Add a new task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={newTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h2>Tasks To Do</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.tasks}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    )
}

export default ToDoList