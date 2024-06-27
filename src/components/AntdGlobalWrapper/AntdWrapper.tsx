import React, { useContext, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { ThemeInfo } from "@site/src/context";

function AntdWrapper({ children }) {
  const { theme: themeInfo } = useContext(ThemeInfo);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeInfo?.baseColor ?? "",
          // 派生变量，影响范围小
          colorBgContainer: themeInfo?.background ?? "",
        },
        algorithm:
          themeInfo?.colorMode === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdWrapper;
