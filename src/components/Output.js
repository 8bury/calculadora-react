import React from "react";
import styles from "./Output.module.css"

function Output({}) {
    return (
    <div className={styles.output}>
        <div className={styles.previous_operand}></div>
        <div className={styles.operand}></div>
    </div>
    );
  }

export default Output;