import React from "react";
import { ConfigProvider, theme } from "antd";
import { useColorMode } from "@docusaurus/theme-common";

function AntdWrapper({ children }) {
  const { colorMode } = useColorMode();
  return (
    <ConfigProvider
      theme={{
        algorithm:
          colorMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdWrapper;
