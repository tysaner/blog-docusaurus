import React, { useContext, useEffect, useState } from "react";
import { Form, Input } from "antd";
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
import Color from "color";
import { ColorGeneratorContext, ThemeInfo } from "@site/src/context";

export default function ColorGenerator(): JSX.Element {
  const { baseColor, setBaseColor, background, setBackground } = useContext(
    ColorGeneratorContext
  );
  // 修改baseColor
  const updateColor = (
    option: { isBackground: boolean },
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { isBackground } = option;
    const colorValue = event.target.value.replace(/^(?=[^#])/, "#");
    try {
      if (isBackground) {
        setBackground(Color(colorValue).hex());
      } else {
        setBaseColor(Color(colorValue).hex());
      }
    } catch {
      console.log("转换错误");
      // setBasseColor
    }
  };
  return (
    <div>
      {/* <input
        id="primary_color"
        type="text"
        // className={clsx(styles.input, "margin-right--sm")}
        value={inputColor}
        onChange={updateColor}
      /> */}
      <Form layout="inline">
        <Form.Item label="主题颜色">
          <Input
            width={100}
            type="color"
            value={baseColor}
            onChange={(e) => {
              updateColor({ isBackground: false }, e);
            }}
          ></Input>
          {baseColor}
        </Form.Item>
        <Form.Item label="背景颜色">
          <Input
            width={100}
            type="color"
            value={background}
            onChange={(e) => {
              updateColor({ isBackground: true }, e);
            }}
          ></Input>
          {baseColor}
        </Form.Item>
      </Form>
      {/* <input
        aria-label="修改主题颜色"
        type="color"
        className={styles.colorInput}
        // value has to always be a valid color, so baseColor instead of
        // inputColor
      /> */}
    </div>
  );
}
