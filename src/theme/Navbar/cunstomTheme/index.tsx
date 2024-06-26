import React, { useState } from "react";
import ColorGenerator from "@site/src/components/ColorGenerator";
import { Button, Drawer } from "antd";
import styles from "./styles.module.css";

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
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Open
      </a>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        forceRender={true}
      >
        <div>
          <ColorGenerator />
        </div>
      </Drawer>
    </div>
  );
}
