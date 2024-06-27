import React, { useContext } from "react";
import { ProviderProps } from "react";
import { ThemeInfo } from "@site/src/context/index";
import { useColorMode } from "@docusaurus/theme-common";
import AntdWrapper from "../components/AntdGlobalWrapper/AntdWrapper";

// Default implementation, that you can customize
export default function Root({ children }) {
  console.log("啦啦啦");
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
