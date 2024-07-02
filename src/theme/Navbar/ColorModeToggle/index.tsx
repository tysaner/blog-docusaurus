import React, { useContext } from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import type { Props } from "@theme/Navbar/ColorModeToggle";
import { ColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import { ColorGeneratorContext } from "@site/src/context";

export default function NavbarColorModeToggle({
  className,
}: Props): JSX.Element | null {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode } = useColorMode();
  const { setColorState ,setClientInfo} = useContext(ColorGeneratorContext);

  if (disabled) {
    return null;
  }

  return (
    <ColorModeToggle
      className={className}
      buttonClassName={
        navbarStyle === "dark"
          ? `${styles.darkNavbarColorModeToggle} changeColorModeToggle`
          : "changeColorModeToggle"
      }
      value={colorMode}
      onChange={(colorMode: ColorMode) => {
        setColorState(colorMode);
      }}
    />
  );
}
