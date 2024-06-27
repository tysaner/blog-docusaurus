import React, { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";
import {
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
  LIGHT_BACKGROUND_COLOR,
  DARK_BACKGROUND_COLOR,
  COLOR_SHADES,
  darkStorage,
  lightStorage,
  ColorState,
  updateDOMColors,
} from "@site/src/utils/colorUtils";

function AntdWrapper({ children }) {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

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
  // 用户选择后的缓存信息
  const [storage, setStorage] = useState(
    isDarkTheme ? darkStorage : lightStorage
  );
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "",
        },
        algorithm:
          colorMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdWrapper;
