import { createContext } from "react";

export const ThemeContext = createContext("light");
export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
};
