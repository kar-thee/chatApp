import initialValues from "./initialValues";

const ReducerFunc = (state, actionObj) => {
  switch (actionObj.type) {
    // basic auth
    case "signin": {
      return {
        ...state,
        token: actionObj.payLoad.token,
        userInfo: actionObj.payLoad.user,
      };
    }
    case "signout": {
      return initialValues;
    }

    // socket functions
    case "socketConnected": {
      return { ...state, socketObj: actionObj.payLoad.socketObj };
    }
    case "socketDisConnected": {
      return { ...state, socketObj: "" };
    }

    // loadingStates
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

    // to indicate chatBox conversations
    case "chatBoxOn": {
      return { ...state, chatBoxId: actionObj.payLoad.id, chatBoxActive: true };
    }
    case "chatBoxOff": {
      return { ...state, chatBoxActive: false };
    }

    // chatLoadingStates - miniloader
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

    // indicate chatNotification when chatBox not active
    case "chatNotificationsAdd": {
      const { chatNotifications } = state;
      //we are filtering to avoid duplicates
      const updatedList =
        chatNotifications.length >= 0 &&
        chatNotifications.filter(
          (chatIdObj) => chatIdObj !== actionObj.payLoad.chatId
        );

      return {
        ...state,
        chatNotifications: [...updatedList, actionObj.payLoad.chatId],
      };
    }
    case "chatNotificationsRemove": {
      const { chatNotifications } = state;
      const updatedList =
        chatNotifications.length >= 0 &&
        chatNotifications.filter(
          (chatIdObj) => chatIdObj !== actionObj.payLoad.chatId
        );
      //updatedList not iterable bug
      return {
        ...state,
        chatNotifications: [...updatedList],
      };
    }

    //get online users using socket io events
    case "updateOnlineUsers": {
      return {
        ...state,
        usersOnlineArray: [...actionObj.payLoad.onlineUsersArray],
      };
    }

    default: {
      return state;
    }
  }
};

export default ReducerFunc;
