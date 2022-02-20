import useAuth from "../hooks/useAuth";

const Protected = ({ children, redirect }) => {
  const [checkAuth] = useAuth();

  return checkAuth() ? children : redirect;
};

export default Protected;
