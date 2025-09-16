"use client";

import { createContext, useContext, useState } from "react";

type GlobalState = {
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  primaryColor: string;
  setPrimaryColor: (primaryColor: string) => void;
  accentColor: string;
  setAccentColor: (accentColor: string) => void;
};

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [bgColor, setBgColor] = useState("#1c0000");
  const [textColor, setTextColor] = useState("#1c0000");
  const [primaryColor, setPrimaryColor] = useState("#1c0000");
  const [accentColor, setAccentColor] = useState("#1c0000");

  return (
    <GlobalContext.Provider
      value={{
        bgColor,
        setBgColor,
        textColor,
        setTextColor,
        primaryColor,
        setPrimaryColor,
        accentColor,
        setAccentColor,
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
