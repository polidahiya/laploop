"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [showloginform, setshowloginform] = useState(false);
  return (
    <AppContext.Provider value={{ showloginform, setshowloginform }}>
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}