import useStateValFunc from "../hooks/useDispatchFunc";

const Protected = ({ children, redirect }) => {
  const [state] = useStateValFunc();

  return state.token !== null ? children : redirect;
};

export default Protected;
