import initialValues from "./initialValues";

const ReducerFunc = (state, actionObj) => {
  switch (actionObj.type) {
    case "signin": {
      return {
        token: actionObj.payLoad.token,
        userInfo: actionObj.payLoad.user,
      };
    }
    case "signout": {
      return initialValues;
    }
    case "loadingStart": {
      return { ...state, loadingState: true };
    }
    case "loadingStop": {
      return { ...state, loadingState: false };
    }
    default: {
      return state;
    }
  }
};

export default ReducerFunc;
