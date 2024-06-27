import React, { useEffect, useState } from "react";
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

export default function ColorGenerator(): JSX.Element {
  // 用钩子获取到当前的主题模式，和更改主题模式的方法
  const { colorMode } = useColorMode();
  // 判断当前是不是夜晚模式
  const isDarkTheme = colorMode === "dark";

  const DEFAULT_PRIMARY_COLOR = isDarkTheme
    ? DARK_PRIMARY_COLOR
    : LIGHT_PRIMARY_COLOR;

  const DEFAULT_BACKGROUND_COLOR = isDarkTheme
    ? DARK_BACKGROUND_COLOR
    : LIGHT_BACKGROUND_COLOR;
  

  // // 设置最开始的颜色
  // const [baseColor, setBaseColor] = useState(DEFAULT_PRIMARY_COLOR);
  // // 设置最开始的背景颜色
  // const [background, setBackground] = useState(DEFAULT_BACKGROUND_COLOR);
  // // 同一组颜色不同的色调
  // const [shades, setShades] = useState(COLOR_SHADES);
  // // 用户选择后的缓存信息
  // const [storage, setStorage] = useState(
  //   isDarkTheme ? darkStorage : lightStorage
  // );
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

  useEffect(() => {
    setStorage(isDarkTheme ? darkStorage : lightStorage);
  }, [isDarkTheme]);

  useEffect(() => {
    const storedValues = JSON.parse(
      storage.get() ?? "{}"
    ) as Partial<ColorState>;
    setBaseColor(storedValues.baseColor ?? DEFAULT_PRIMARY_COLOR);
    setBackground(storedValues.background ?? DEFAULT_BACKGROUND_COLOR);
    setShades(storedValues.shades ?? COLOR_SHADES);
  }, [storage, DEFAULT_BACKGROUND_COLOR, DEFAULT_PRIMARY_COLOR]);

  useEffect(() => {
    // 调用更新方法
    updateDOMColors({ baseColor, background, shades }, isDarkTheme);
    // 缓存状态
    storage.set(JSON.stringify({ baseColor, background, shades }));
    // 监听到baseColor、主题变化、背景颜色变换、一组颜色的色调、缓存。只要状态发生变化就更新
  }, [baseColor, isDarkTheme, background, shades, storage]);

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
