import React, { useContext } from "react";
import { Form, Input } from "antd";
import Color from "color";
import { ColorGeneratorContext } from "@site/src/context";

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
    </div>
  );
}
