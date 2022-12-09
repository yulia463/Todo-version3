import React, {useState} from 'react';
import './App.css';
import {TodoForm} from "./components/Todos/TodoForm";
import {TodoList} from "./components/Todos/TodoList";
import {v1} from "uuid";
import TodosActions from "./components/Todos/TodosActions";

export type TodoType = {
    text: string
    isCompleted: boolean
    id: string

}

function App() {
    const [todos, setTodos] = useState<Array<TodoType>>([])

    const addTodoHandler = (text: string) => {
        if (text.trim() === '') {
            return
        }
        const newTodo: TodoType = {
            text,
            isCompleted: false,
            id: v1(),
        }
        setTodos([...todos, newTodo])
    }
    const deleteTodoHandler = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const toggleTodoHandler = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {...todo, isCompleted: !todo.isCompleted}
                    : {...todo}
            )
        )
    }
    const resetTodosHandler = () => {
        setTodos([])
    }
    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }
    const completedTodosCount=todos.filter((todo)=>todo.isCompleted).length
    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm
                addTodo={addTodoHandler}/>

            {todos.length
                ? <TodosActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodosHandler={deleteCompletedTodosHandler}/>
                : null
            }
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}/>

        </div>
    );
}

export default App;
