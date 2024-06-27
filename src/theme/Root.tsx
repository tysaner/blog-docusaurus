import React, { useContext, useState } from "react";
import { ProviderProps } from "react";
import { ThemeInfo } from "@site/src/context/index";
import { useColorMode } from "@docusaurus/theme-common";
import AntdWrapper from "../components/AntdGlobalWrapper/AntdWrapper";

// Default implementation, that you can customize
export default function Root({ children }) {
  console.log("啦啦啦");

  // 设置最开始的颜色
  const [baseColor, setBaseColor] = useState("");
  // 设置最开始的背景颜色
  const [background, setBackground] = useState("");
  // 同一组颜色不同的色调
  const [shades, setShades] = useState({});
  // 用户选择后的缓存信息
  const [storage, setStorage] = useState({});
  return (
    <ThemeInfo.Provider
      value={{
        colorMode: "",
        isDarkTheme: false,
        baseColor: "",
        background: "",
        storage: {},
      }}
    >
      {children}
    </ThemeInfo.Provider>
  );
}
