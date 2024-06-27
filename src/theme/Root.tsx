import React, { useState } from "react";
import { ThemeInfo } from "../context";

// Default implementation, that you can customize
export default function Root({ children }) {
  console.log("啦啦啦");
  const [state, setState] = useState<{
    colorMode: string;
    isDarkTheme: boolean;
    baseColor: string;
    background: string;
    storage: {};
  }>({
    colorMode: "light",
    isDarkTheme: false,
    baseColor: "#000000",
    background: "#ffffff",
    storage: {},
  });

  return <ThemeInfo.Provider value={state}>{children}</ThemeInfo.Provider>;
}
