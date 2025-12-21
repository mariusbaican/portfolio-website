"use client";

import { createContext, useContext, useEffect, useState } from "react";

type GlobalState = {
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  primaryColor: string;
  setPrimaryColor: (primaryColor: string) => void;
};

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [bgColor, setBgColor] = useState("#1c0000");
  const [textColor, setTextColor] = useState("#f2e7e5");
  const [primaryColor, setPrimaryColor] = useState("#b70101");

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        bgColor,
        setBgColor,
        textColor,
        setTextColor,
        primaryColor,
        setPrimaryColor,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
