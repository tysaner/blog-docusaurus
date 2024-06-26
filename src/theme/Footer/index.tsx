import React, { useEffect, useState } from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useColorMode } from "@docusaurus/theme-common";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  // 用钩子获取到当前的主题模式，和更改主题模式的方法
  const { colorMode } = useColorMode();
  // 是否为第一次渲染
  const [initRender, setInitRender] = useState(true);
  useEffect(() => {
    const transition = (document as any).startViewTransition(() => {
      document.documentElement.classList.toggle("dark");
    });
    if (!initRender) {
      const tragetRadius = Math.hypot(window.innerWidth, window.innerHeight);
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            // clipPath: ["circle(0% at 50% 50%)", "circle(100% at 100% 100%)"],
            clipPath: [
              `circle(0% at ${window.innerWidth}px ${0}px)`,
              `circle(${tragetRadius}px at ${window.innerWidth}px ${window.innerHeight}px)`,
            ],
          },
          {
            duration: 600,
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      setInitRender(false);
    }
  }, [colorMode]);
  return (
    <>
      <Footer {...props} />
    </>
  );
}
