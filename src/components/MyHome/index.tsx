import React, { useEffect } from "react";
import styles from "./index.module.css";
import Logo from "@site/src/assets/images/docusaurus.png";

function index() {
  useEffect(() => {
    const listener = () => {
      console.log(window.getComputedStyle(document.documentElement).fontSize);
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.logoContainer}>
          <div className={styles.logoBg}></div>
          <img src={Logo} className={styles.img} alt="" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>问问物语</h1>
          <h2 className={styles.secondTitle}>WENWEN的成长之路</h2>
          <h2 className={styles.description}>知识是进步的阶梯</h2>
        </div>
      </div>
    </div>
  );
}

export default index;
