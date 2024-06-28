import React, { useEffect, useState } from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useColorMode } from "@docusaurus/theme-common";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
    </>
  );
}
