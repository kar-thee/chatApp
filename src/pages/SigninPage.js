import React, { useState, useEffect, useCallback } from "react";

import SigninApiCall from "../apis/public/SigninApiCall";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDispatchFunc from "../hooks/useDispatchFunc";

import SigninComponent from "../components/public/SigninComponent";

const SigninPage = () => {
  const initialStateValues = {
    email: "",
    password: "",
  };
  const initialErrorValues = {
    email: false,
    password: false,
    hasError: false,
  };
  const [state, setState] = useState(initialStateValues);
  const [pwdHidden, setPwdHidden] = useState(false);
  const [errorState, setErrorState] = useState(initialErrorValues);
  const navigate = useNavigate();
  const [dispatch] = useDispatchFunc();

  const validateFunc = useCallback(() => {
    // eslint-disable-next-line no-useless-escape
    const errorEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      state.email
    )
      ? false
      : true;
    const errorPassword =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        state.password
      )
        ? false
        : true;
    return { errorEmail, errorPassword };
  }, [state.email, state.password]);

  useEffect(() => {
    const { errorEmail, errorPassword } = validateFunc();
    const isErrorPresent = errorEmail || errorPassword ? true : false;
    setErrorState((prev) => ({
      ...prev,
      hasError: isErrorPresent,
    }));
  }, [validateFunc]);

  const handleChange = (ev) => {
    setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const togglePwdVisibility = () => {
    setPwdHidden((prev) => !prev);
  };

  const submitHandler = async () => {
    const { errorEmail, errorPassword } = validateFunc();
    const isErrorPresent = errorEmail || errorPassword ? true : false;
    setErrorState(() => ({
      email: errorEmail,
      password: errorPassword,
      hasError: isErrorPresent,
    }));
    if (errorState.hasError) {
      //hasError so dont call api
      return;
    }

    //api call here
    dispatch({ type: "loadingStart" });
    const body = {
      email: state.email,
      password: state.password,
    };
    const response = await SigninApiCall(body);
    dispatch({ type: "loadingStop" });

    if (response.data.type === "success") {
      //alert success & save token and userInfo & navigate to chatPage
      toast.success(response.data.msg);
      dispatch({
        type: "signin",
        payLoad: { token: response.data.token, user: response.data.user },
      });
      navigate("/chatApp");
    } else {
      //alert to try again
      toast.error(response.data.msg);
    }
  };

  return (
    <>
      <SigninComponent
        state={state}
        errorState={errorState}
        handleChange={handleChange}
        pwdHidden={pwdHidden}
        togglePwdVisibility={togglePwdVisibility}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default SigninPage;
