import { createContext, useState, useContext } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
      const [mode, setMode] = useState("light");
      const handleModeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      };

      return (
        <ModeContext.Provider value={{ mode, handleModeChange }}>
          {children}
        </ModeContext.Provider>
      )

};
export default ModeContext;

export const mode = () => useContext(ModeContext);