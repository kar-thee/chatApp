import React, { useState, useEffect } from "react";
import useStateValFunc from "../../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";

import UserChatsApiCall from "../../../../apis/chats/UserChatsApiCall";

import ChatTitle from "../ChatTitle";
import ScrollableChatPreview from "./ScrollableChatPreview";
import MiniLoader from "../../../../helpers/MiniLoader";
import { toast } from "react-toastify";

const ChatMessages = () => {
  const [chatBoxState, setChatBoxArray] = useState([]);
  const [{ token, userInfo, loadingState, newMsgAdded }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();

  // this will ensure whenever newMsgAdded is changed will refresh the chatBoxState
  useEffect(() => {
    if (newMsgAdded) {
      (async () => {
        const response = await UserChatsApiCall(userInfo.id, token);
        if (response.data.type === "success") {
          setChatBoxArray(response.data.chatBoxes);
          dispatch({ type: "newMsgAddedFalse" });
        }
        // setting newMsgAdded to false after setting the state (i.e refreshing)
        dispatch({ type: "newMsgAddedFalse" });
      })();
    }
  }, [dispatch, newMsgAdded, token, userInfo.id]);

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await UserChatsApiCall(userInfo.id, token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        toast.success(response.data.msg);
        setChatBoxArray(response.data.chatBoxes);
      } else {
        toast.error(response.data.msg);
      }
    })();

    return () => {
      dispatch({ type: "sidebarViewOff" });
    };
  }, [dispatch, token, userInfo.id]);

  if (loadingState) {
    return (
      <>
        <MiniLoader />
      </>
    );
  }

  return (
    <>
      <>
        <ChatTitle title="Messages" />
      </>

      {chatBoxState && chatBoxState.length > 0 ? (
        <ScrollableChatPreview chatArray={chatBoxState} />
      ) : (
        "No chat Found"
      )}
    </>
  );
};

export default ChatMessages;
