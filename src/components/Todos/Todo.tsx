import React from "react";
import styles from './Todo.module.css'
import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import {TodoType} from "../../App";
import {FaCheck} from "react-icons/fa";

type TodoPropsType = {
    todo: TodoType
    deleteTodo: () => void
    toggleTodo: (id: string) => void
}

export const Todo = (props: TodoPropsType) => {
    return (
        <div className={`${styles.todo} ${
            props.todo.isCompleted ? styles.completedTodo : ''}`}>

            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{props.todo.text} </div>
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => props.deleteTodo()}/>
            <FaCheck
                className={!props.todo.isCompleted
                    ? styles.checkIcon
                    : `${styles.checkIcon} ${styles.check} `
                }
                onClick={() => props.toggleTodo(props.todo.id)}/>

        </div>
    );
}