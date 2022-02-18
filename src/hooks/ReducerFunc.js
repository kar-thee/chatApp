const ReducerFunc = (state, actionObj) => {
  switch (actionObj.type) {
    case "signin": {
      return {
        token: actionObj.payLoad.token,
        userInfo: actionObj.payLoad.user,
      };
    }
    case "loadingStart": {
      return { ...state, loading: true };
    }
    case "loadingStop": {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default ReducerFunc;
