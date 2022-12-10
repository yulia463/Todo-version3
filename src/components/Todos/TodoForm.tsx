import React, {useState} from "react";
import styles from './TodoForm.module.css'
import Button from "../UI/Button";


type TodoFormPropsType = {
    addTodo: (text: string) => void
}

export const TodoForm = (props: TodoFormPropsType) => {
    const [text, setText] = useState<string>('')

    const onSubmitHandler = (event: any) => {
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
                    onChange={(e) => setText(e.target.value)}/>
                <Button disabled={false} onClick={onSubmitHandler} type={"submit"} title={'Submit'}>Submit</Button>
            </form>
        </div>

    )
}