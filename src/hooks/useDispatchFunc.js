import { useContext } from "react";
import AppContext from "../context/AppContext";

const useStateValFunc = () => {
  const [, dispatch] = useContext(AppContext);

  return [dispatch];
};

export default useStateValFunc;
