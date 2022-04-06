import React, { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
