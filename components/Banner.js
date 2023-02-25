import React from "react";
import styles from "./banner.module.css";

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>College</span>
        <span className={styles.title2}>Finder</span>
      </h1>
      <p className={styles.subTitle}>Your local Colleges</p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
}

export default Banner;
