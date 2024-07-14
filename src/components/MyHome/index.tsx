import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import useGlobalData from "@docusaurus/useGlobalData";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import Link from "@docusaurus/Link";

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
          <img
            src={require("@site/static/img/docusaurus.png").default}
            className={styles.img}
            alt=""
          />
        </div>
        <div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>问问物语</h1>
            <h2 className={styles.secondTitle}>Wenwen's Small Room</h2>
            <h2 className={styles.description}>知识是进步的阶梯</h2>
          </div>
          <div className={styles.btnContainer}>
            <Link to={"/docs/intro"}>
              <Button className={styles.btn} type="primary">
                知识文档
              </Button>
            </Link>
            <Link to={"/blog"}>
              <Button className={styles.btn}>我的日常</Button>
            </Link>
            <Button
              className={styles.btn}
              type="primary"
              onClick={() => {
                window.open("https://gitee.com/tangyudev/docusaurus");
              }}
            >
              博客源码
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
