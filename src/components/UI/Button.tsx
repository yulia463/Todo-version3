import React from "react";
import styles from './Button.module.css'

type ButtonPropsType = {
    onClick: any
    children:React.ReactNode
    title:string
    disabled:boolean
    type:'submit' | 'button' |'reset'
    subtitle:string
}

 const Button = (props: ButtonPropsType) => {
    return (
        <button className={styles.button} onClick={props.onClick} title={props.title} disabled={props.disabled}>{props.children}</button>
    )
}
export default Button;