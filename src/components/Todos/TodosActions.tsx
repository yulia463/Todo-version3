import React from "react";
import Button from '../UI/Button'
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './TodosActions.module.css'

type TodoActionsType = {
    resetTodos: () => void
    deleteCompletedTodosHandler: () => void
    completedTodosExist:boolean

}

const TodosActions = (props: TodoActionsType) => {
    return (
        <div className={styles.todosActionsContainer}>
            <Button
                subtitle={'ll'}
                type={"submit"}
                disabled={false}
                title={"Reset Todos"}
                onClick={props.resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button
                subtitle={'jj'}
                type={"submit"}
                title={"Clear Completed Todos"}
                onClick={props.deleteCompletedTodosHandler}
                disabled={!props.completedTodosExist}
            >
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}
export default TodosActions;