import clsx from "clsx";
import React from "react";
import styles from "./WhiteDock.module.scss";

export const WhiteDock = ({children,color,className}) => {
    const colors = {
        green: styles.green,
    };
    return(
        <div 
        className={clsx(className, styles.whitedock,colors[color])}>
            {children}
        </div>
    );
}