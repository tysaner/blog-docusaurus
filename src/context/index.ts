import { createContext } from "react";

export const ThemeInfo = createContext({
  colorMode: "light",
  isDarkTheme: false,
  baseColor: "#ffffff",
  background:'#ffffff',
  storage:{}
});
