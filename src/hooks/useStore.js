import { useEffect, useReducer } from "react";
import initialValues from "./initialValues";
import ReducerFunc from "./ReducerFunc";

const useStore = () => {
  const [state, dispatch] = useReducer(ReducerFunc, initialValues, () => {
    const tokenVal = JSON.parse(localStorage.getItem("token"));
    const userInfoVal = JSON.parse(localStorage.getItem("userInfo"));

    return {
      ...initialValues,
      token: tokenVal || null,
      userInfo: userInfoVal || null,
    };
  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
  }, [state.token, state.userInfo]);

  return [state, dispatch];
};

export default useStore;
