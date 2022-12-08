import React from "react";
import styles from './Button.module.css'

type ButtonPropsType = {
    onClick?: () => void
    children?:React.ReactNode
    title?:string
    disabled?:boolean
}

 const Button = (props: ButtonPropsType) => {
    return (
        <button className={styles.button} onClick={props.onClick} title={props.title} disabled={props.disabled}>{props.children}</button>
    )
}
export default Button;