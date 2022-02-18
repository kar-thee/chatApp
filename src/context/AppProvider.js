import React, { useContext } from "react";
import useStore from "../hooks/useStore";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const context = useContext(AppContext);
  const [state, dispatch] = useStore();

  return (
    <context.Provider values={[state, dispatch]}>{children}</context.Provider>
  );
};

export default AppProvider;
