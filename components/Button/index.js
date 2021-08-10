import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

export const Button = ({children,disabled,color,onclick,className}) => {
    const colors = {
        green: styles.green,
    };
    return(
        <button 
        onClick={onclick} 
        disabled={disabled} 
        type="button" 
        className={clsx(className, styles.button,colors[color])}>
            {children}
        </button>
    );
}