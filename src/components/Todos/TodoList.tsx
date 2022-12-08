import React from "react";
import {Todo} from "./Todo";
import styles from './TodoList.module.css'
import {TodoType} from "../../App";

type TodoListPropsType = {
    todos: Array<TodoType>
    deleteTodo: (id: string) => void
    toggleTodo: (id:string)=>void
}

export const TodoList = (props: TodoListPropsType) => {
    console.log(props)
    return (
        <div className={styles.todoListContainer}>
            {!props.todos.length && <h2>Todo list is empty</h2>}
            {props.todos.map((todo) =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={() => props.deleteTodo(todo.id)}
                    toggleTodo={props.toggleTodo}/>)}

        </div>
    )
}