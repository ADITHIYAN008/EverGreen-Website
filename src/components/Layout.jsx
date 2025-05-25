import React from "react";

import Nav from "@/components/Nav";
import useDarkMode from "@/constant/useDarkMode";

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
