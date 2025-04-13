import { createContext, useContext, useState } from "react";
import "./index.css";
// Content

const Button = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle theme</button>
  );
};
const Content = () => {
  return (
    <div id="container">
      <h1>Website Content</h1>
      <p>This is sample content</p>
      <Button />
    </div>
  );
};

const ThemeContext = createContext();
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div id={isDarkMode ? "dark" : "light"} className="parentDiv">
          <Content />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
