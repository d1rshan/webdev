import React, { createContext, useState, useContext } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const theme = {
    isDarkMode,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        backgroundColor: isDarkMode ? "#fff" : "#333",
        color: isDarkMode ? "#333" : "#fff",
      }}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
function Content() {
  const { isDarkMode } = useTheme();
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "20px",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <h1>Website Content</h1>
      <p>This is some sample content.</p>
      <ThemeToggle />
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
export default App;
