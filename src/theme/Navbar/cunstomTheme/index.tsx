import React, { useState } from "react";
import ColorGenerator from "@site/src/components/ColorGenerator";
import { ConfigProvider, Drawer } from "antd";
import styles from "./styles.module.css";
import AntdWrapper from "@site/src/components/AntdGlobalWrapper/AntdWrapper";

export default function CunstomTheme() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a
        type="link"
        onClick={showDrawer}
        className={styles.aLink}
        style={{
          color: hovered
            ? "var(--ifm-navbar-link-hover-color)"
            : "var(--ifm-navbar-link-color)",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        自定义主题
      </a>
      <AntdWrapper>
        <Drawer
          title="自定义主题"
          placement="right"
          onClose={onClose}
          open={open}
          forceRender={true}
        >
          <div>
            <ColorGenerator isNav={true} />
          </div>
        </Drawer>
      </AntdWrapper>
    </div>
  );
}
