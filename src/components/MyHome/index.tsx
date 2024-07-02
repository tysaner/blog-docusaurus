import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Logo from "@site/src/assets/images/docusaurus.png";
import useGlobalData from "@docusaurus/useGlobalData";
import { useHistory } from "react-router-dom";
import Link from "@docusaurus/Link";
import { Button } from "antd";

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

  const globalData = useGlobalData();
  const [docs, setDocs] = useState<Record<string, any>>(
    (globalData["docusaurus-plugin-content-docs"]?.default as any)
      ?.versions?.[0].docs
  );
  const history = useHistory();
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.logoContainer}>
          <div className={styles.logoBg}></div>
          <img src={Logo} className={styles.img} alt="" />
        </div>
        <div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>问问物语</h1>
            <h2 className={styles.secondTitle}>Wenwen's Small Room</h2>
            <h2 className={styles.description}>知识是进步的阶梯</h2>
          </div>
          <div className={styles.btnContainer}>
            <Button
              className={styles.btn}
              onClick={() => {
                history.push("/docs/intro");
              }}
              type="primary"
            >
              知识文档
            </Button>
            <Button
              className={styles.btn}
              onClick={() => {
                history.push("/blog");
              }}
            >
              我的日常
            </Button>
            <Button
              className={styles.btn}
              type="primary"
              onClick={() => {
                history.push("/blog");
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
