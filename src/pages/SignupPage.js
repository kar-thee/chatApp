import React, { useState, useEffect, useCallback } from "react";

import SignupApiCall from "../apis/public/SignupApiCall";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDispatchFunc from "../hooks/useDispatchFunc";
import SignupComponent from "../components/public/SignupComponent";

const SignupPage = () => {
  const initialStateValues = {
    name: "",
    email: "",
    password: "",
  };
  const initialErrorValues = {
    name: false,
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
    const errorName = state.name.length > 2 ? false : true;
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
    return { errorName, errorEmail, errorPassword };
  }, [state.email, state.name.length, state.password]);

  useEffect(() => {
    const { errorName, errorEmail, errorPassword } = validateFunc();
    const isErrorPresent =
      errorName || errorEmail || errorPassword ? true : false;
    setErrorState((prev) => ({
      ...prev,
      hasError: isErrorPresent,
    }));
  }, [state.email, state.name.length, state.password, validateFunc]);

  const handleChange = (ev) => {
    setState((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const togglePwdVisibility = () => {
    setPwdHidden((prev) => !prev);
  };

  const submitHandler = async () => {
    const { errorName, errorEmail, errorPassword } = validateFunc();
    const isErrorPresent =
      errorName || errorEmail || errorPassword ? true : false;
    setErrorState(() => ({
      name: errorName,
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
      name: state.name,
      email: state.email,
      password: state.password,
    };
    const response = await SignupApiCall(body);
    dispatch({ type: "loadingStop" });

    if (response.data.type === "success") {
      //alert success & navigate to signinPage
      toast.success(response.data.msg);
      navigate("/signin");
    } else {
      //alert to try again
      toast.error(response.data.msg);
    }
  };

  return (
    <>
      <SignupComponent
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

export default SignupPage;
