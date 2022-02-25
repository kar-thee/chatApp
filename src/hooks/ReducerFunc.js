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
    // for mobile view -sidebar
    case "sidebarViewOn": {
      return { ...state, sideBarView: true };
    }
    case "sidebarViewOff": {
      return { ...state, sideBarView: false };
    }
    case "chatBoxOn": {
      return { ...state, chatBoxId: actionObj.payLoad.id, chatBoxActive: true };
    }
    case "chatBoxOff": {
      return { ...state, chatBoxId: "", chatBoxActive: false };
    }
    case "chatLoadingStart": {
      return { ...state, chatBoxLoading: true };
    }
    case "chatLoadingStop": {
      return { ...state, chatBoxLoading: false };
    }
    //this newMsgAdded will helps in re-render when new MsgAdded
    case "newMsgAddedTrue": {
      return { ...state, newMsgAdded: true };
    }
    case "newMsgAddedFalse": {
      return { ...state, newMsgAdded: false };
    }
    default: {
      return state;
    }
  }
};

export default ReducerFunc;
