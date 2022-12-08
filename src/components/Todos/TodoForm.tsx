import React, { useState} from "react";
import styles from './TodoForm.module.css'


type TodoFormPropsType = {
    addTodo: (text: string) =>void
}

export const TodoForm = (props: TodoFormPropsType) => {
    const [text, setText] = useState('')

    const onSubmitHandler = (event:any) => {
        event.preventDefault()
        props.addTodo(text)
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
        <form>
            <input
                placeholder={"Enter new todo"}
                value={text}
                onChange={(e)=> setText(e.target.value)}/>
            <button onClick={onSubmitHandler} type={"submit"}>Submit</button>
        </form>
        </div>

    )
}