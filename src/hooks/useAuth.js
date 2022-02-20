import useStateValFunc from "./useStateValFunc";

const useAuth = () => {
  const [{ token }] = useStateValFunc();

  const checkAuth = () => {
    return token && token !== null ? true : false;
  };

  return [checkAuth];
};

export default useAuth;
