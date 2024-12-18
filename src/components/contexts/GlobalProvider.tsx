"use client";
import { createContext, useContext } from "react";
import { stateToggle } from "./useState/stateToggle";

interface GlobalStateProviderProps {
  isToggle: boolean;
  handleToggle: () => void;
}

const GlobalStateContext = createContext<GlobalStateProviderProps | undefined>(
  undefined
);
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const { isToggle, handleToggle } = stateToggle();
  return (
    <GlobalStateContext.Provider value={{ isToggle, handleToggle }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider"
    );
  }
  //   console.log(context);
  return context;
};
