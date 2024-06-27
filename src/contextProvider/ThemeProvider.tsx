import React, { useEffect, useState } from "react";
import { ThemeInfo } from "../context";
import AntdWrapper from "../components/AntdGlobalWrapper/AntdWrapper";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    baseColor: "",
    background: "",
    shades: {},
    isDarkTheme: false,
  });

  const toggleTheme = (param) => {
    setTheme((current) => {
      return { ...current, ...param };
    });
  };
  return (
    <ThemeInfo.Provider value={{ theme, toggleTheme }}>
      <AntdWrapper>{children}</AntdWrapper>
    </ThemeInfo.Provider>
  );
}

export default ThemeProvider;
