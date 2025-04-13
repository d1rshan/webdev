import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

// custom hook  
export  function  useTheme(){
    return useContext(ThemeContext);
}

