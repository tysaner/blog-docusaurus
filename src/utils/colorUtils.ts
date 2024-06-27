import Color from "color";
import { createStorageSlot } from "@docusaurus/theme-common";

export type ColorState = {
  baseColor: string;
  background: string;
  shades: Shades;
};

export type Shades = {
  [cssVar: string]: {
    adjustment: number;
    adjustmentInput: string;
    displayOrder: number;
    codeOrder: number;
  };
};
export const COLOR_SHADES: Shades = {
  "--ifm-color-primary": {
    adjustment: 0,
    adjustmentInput: "0",
    displayOrder: 3,
    codeOrder: 0,
  },
  "--ifm-color-primary-dark": {
    adjustment: 0.1,
    adjustmentInput: "10",
    displayOrder: 4,
    codeOrder: 1,
  },
  "--ifm-color-primary-darker": {
    adjustment: 0.15,
    adjustmentInput: "15",
    displayOrder: 5,
    codeOrder: 2,
  },
  "--ifm-color-primary-darkest": {
    adjustment: 0.3,
    adjustmentInput: "30",
    displayOrder: 6,
    codeOrder: 3,
  },
  "--ifm-color-primary-light": {
    adjustment: -0.1,
    adjustmentInput: "-10",
    displayOrder: 2,
    codeOrder: 4,
  },
  "--ifm-color-primary-lighter": {
    adjustment: -0.15,
    adjustmentInput: "-15",
    displayOrder: 1,
    codeOrder: 5,
  },
  "--ifm-color-primary-lightest": {
    adjustment: -0.3,
    adjustmentInput: "-30",
    displayOrder: 0,
    codeOrder: 6,
  },
};

export const LIGHT_PRIMARY_COLOR = "#2e8555";
export const DARK_PRIMARY_COLOR = "#25c2a0";
export const LIGHT_BACKGROUND_COLOR = "#ffffff";
export const DARK_BACKGROUND_COLOR = "#181920";

//sessionStorage允许在用户下次访问网站时重置所有内容
export const lightStorage = createStorageSlot("ifm-theme-colors-light", {
  persistence: "sessionStorage",
});
export const darkStorage = createStorageSlot("ifm-theme-colors-dark", {
  persistence: "sessionStorage",
});

// 获取这一组的颜色并返回变量名
const getAdjustedColors = (
  shades: Shades,
  baseColor: string
): (Shades[string] & { variableName: string; hex: string })[] => {
  return Object.keys(shades).map((shade) => {
    return {
      ...shades[shade],
      variableName: shade,
      hex: Color(baseColor).darken(shades[shade]!.adjustment).hex(),
    };
  });
};

// 更新css变量的方法
export const updateDOMColors = (
  { baseColor, background, shades }: ColorState,
  isDarkTheme: boolean
) => {
  let sheetIndex: number = 0;
  // 因为document.styleSheets打印出来发现是一个类数组使用Array.from转换成数组（其实也不用转，类数组通过索引一样能访问，吃多了，源码是这么写的）
  Array.from(document.styleSheets).forEach(
    (item: CSSStyleSheet, index: number) => {
      const sheetCssRules = Array.from(item.cssRules);
      const notAntd = sheetCssRules.forEach(
        (_item: CSSRule, _index: number) => {
          // 判断是否是antd的css规则
          if (_item.cssText.includes("--ifm-color-primary")) {
            sheetIndex = index;
          }
        }
      );
    }
  );
  // 获取规则
  const styleSheet = Array.from(document.styleSheets)[sheetIndex];
  // 获取规则
  const rules = Array.from(styleSheet.cssRules) as CSSStyleRule[];
  // 这看起来最像自定义主题颜色定义的规则
  const ruleToDelete = rules.findIndex(
    (item) =>
      item.selectorText ===
        (isDarkTheme ? 'data-theme="dark"' : '[data-theme="light"]') &&
      Array.from(item.style).includes("--ifm-color-primary") &&
      item.style.length < 10
  );
  if (ruleToDelete >= 0) {
    styleSheet.deleteRule(ruleToDelete);
  };
  console.log(background,'background');
  // 添加新的规则
  const newRule = `
    ${isDarkTheme ? '[data-theme="dark"]' : '[data-theme="light"]'}
    {
      ${getAdjustedColors(shades, baseColor)
        .map((item) => {
          return ` ${item.variableName} : ${item.hex} ;`;
        })
        .join("\n")}
        --ifm-background-color: ${background};
    }
  `;
  styleSheet.insertRule(newRule, styleSheet.cssRules.length - 1);
};
