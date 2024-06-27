import React, { useState } from "react";
import ThemeProvider from "../contextProvider/ThemeProvider";

// Default implementation, that you can customize
export default function Root({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
