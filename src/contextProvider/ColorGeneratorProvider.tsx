import React, { useContext, useEffect, useState } from "react";
import { ColorGeneratorContext, ThemeInfo } from "../context";
import { useColorMode } from "@docusaurus/theme-common";
import { ColorMode } from "@docusaurus/theme-common";
import {
  COLOR_SHADES,
  ColorState,
  DARK_BACKGROUND_COLOR,
  DARK_PRIMARY_COLOR,
  LIGHT_BACKGROUND_COLOR,
  LIGHT_PRIMARY_COLOR,
  darkStorage,
  lightStorage,
  updateDOMColors,
} from "../utils/colorUtils";

function ColorGeneratorProvider({ children }) {
  // 用钩子获取到当前的主题模式，和更改主题模式的方法
  const { colorMode, setColorMode } = useColorMode();
  const [colorState, setColorState] = useState<ColorMode>(colorMode);
  // 存储用户选择的颜色和背景色
  const { theme: themeInfo, toggleTheme } = useContext(ThemeInfo);
  // 存储用户选择的颜色和背景色

  // 判断当前是不是夜晚模式
  const isDarkTheme = colorState === "dark";

  const DEFAULT_PRIMARY_COLOR = isDarkTheme
    ? DARK_PRIMARY_COLOR
    : LIGHT_PRIMARY_COLOR;

  const DEFAULT_BACKGROUND_COLOR = isDarkTheme
    ? DARK_BACKGROUND_COLOR
    : LIGHT_BACKGROUND_COLOR;

  // 设置最开始的颜色
  const [baseColor, setBaseColor] = useState(DEFAULT_PRIMARY_COLOR);
  // 设置最开始的背景颜色
  const [background, setBackground] = useState(DEFAULT_BACKGROUND_COLOR);
  // 同一组颜色不同的色调
  const [shades, setShades] = useState(COLOR_SHADES);
  // 用户选择后的缓存信息
  const [storage, setStorage] = useState(
    isDarkTheme ? darkStorage : lightStorage
  );
  const [clientInfo, setClientInfo] = useState<Record<string, any>>({});

  useEffect(() => {
    const storedValues = JSON.parse(
      storage.get() ?? "{}"
    ) as Partial<ColorState>;
    setBaseColor(storedValues.baseColor ?? DEFAULT_PRIMARY_COLOR);
    setBackground(storedValues.background ?? DEFAULT_BACKGROUND_COLOR);
    setShades(storedValues.shades ?? COLOR_SHADES);
    toggleTheme({
      baseColor: storedValues.baseColor ?? DEFAULT_PRIMARY_COLOR,
      background: storedValues.background ?? DEFAULT_BACKGROUND_COLOR,
      shades: storedValues.shades ?? COLOR_SHADES,
      isDarkTheme: isDarkTheme,
    });
  }, [storage, DEFAULT_BACKGROUND_COLOR, DEFAULT_PRIMARY_COLOR]);

  useEffect(() => {
    // 调用更新方法
    updateDOMColors({ baseColor, background, shades }, isDarkTheme);
    // 缓存状态
    storage.set(JSON.stringify({ baseColor, background, shades }));
    // 监听到baseColor、主题变化、背景颜色变换、一组颜色的色调、缓存。只要状态发生变化就更新
    toggleTheme({
      baseColor: baseColor,
      background: background,
      shades: shades,
      isDarkTheme: isDarkTheme,
    });
  }, [baseColor, isDarkTheme, background, shades, storage]);

  // 更换主题动画
  // 是否为第一次渲染
  const [initRender, setInitRender] = useState(true);
  useEffect(() => {
    if (!(document as any).startViewTransition) {
      return;
    }
    if (!initRender) {
      const { clientY, clientX } = clientInfo;
      const tragetRadius = Math.hypot(
        Math.max(window.innerWidth - clientX, clientX),
        window.innerHeight - clientY
      );
      const clipPath = [
        `circle(0% at ${clientX ?? 0}px ${clientY ?? 0}px)`,
        `circle(${tragetRadius ? `${tragetRadius}px` : `100%`} at ${
          clientX ?? 0
        }px ${clientY ?? 0}px)`,
      ];
      const transition = (document as any).startViewTransition(() => {
        setColorMode(colorState);
        setStorage(isDarkTheme ? darkStorage : lightStorage);
      });
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: colorState === "dark" ? clipPath : clipPath.reverse(),
          },
          {
            duration: 300,
            easing: "ease-in",
            pseudoElement: `::view-transition-${
              colorState === "dark" ? "new" : "old"
            }(root)`,
          }
        );
      });
    } else {
      setStorage(isDarkTheme ? darkStorage : lightStorage);
      setInitRender(false);
    }
  }, [colorState]);

  useEffect(() => {
    const colorModeBtn: HTMLDivElement = document.querySelector(
      ".changeColorModeToggle"
    );
    const clientY = colorModeBtn.offsetHeight + colorModeBtn.clientHeight / 2;
    const clientX = colorModeBtn.offsetLeft + colorModeBtn.clientWidth / 2;
    setClientInfo({
      clientY,
      clientX,
    });
  }, [colorState]);
  return (
    <ColorGeneratorContext.Provider
      value={{
        baseColor,
        setBaseColor,
        background,
        setBackground,
        colorMode: colorState,
        storage,
        shades,
        clientInfo,
        setClientInfo,
        colorState,
        setColorState,
      }}
    >
      {children}
    </ColorGeneratorContext.Provider>
  );
}

export default ColorGeneratorProvider;
