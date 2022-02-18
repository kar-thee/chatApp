import { useEffect, useReducer } from "react";
import initialValues from "./initialValues";
import ReducerFunc from "./ReducerFunc";

const useStore = () => {
  const [state, dispatch] = useReducer(ReducerFunc, initialValues, () => {
    const token = JSON.stringify(localStorage.getItem("token"));
    const userInfo = JSON.stringify(localStorage.getItem("userInfo"));

    return {
      ...initialValues,
      token: token || null,
      userInfo: userInfo || null,
    };
  });

  useEffect(() => {
    localStorage.setItem("token", state.token);
    localStorage.setItem("userInfo", state.userInfo);
  }, [state.token, state.userInfo]);

  return [state, dispatch];
};

export default useStore;
