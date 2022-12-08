import React from "react";
import Button from '../UI/Button'
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";


const TodosActions = () => {
    return (
        <div>
            <Button title={"Reset Todos"}>
                <RiRefreshLine/>
            </Button>
            <Button title={"Clear Completed Todos"}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}
export default TodosActions;