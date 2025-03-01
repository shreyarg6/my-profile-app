import { createContext, useState } from "react";

const ModeContext = createContext();

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