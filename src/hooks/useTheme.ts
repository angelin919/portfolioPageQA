import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../context/ThemeContext";

// Хук для использования темы
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  console.log(context)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};