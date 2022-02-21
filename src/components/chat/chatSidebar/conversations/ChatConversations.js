import React, { useState, useEffect } from "react";
import useStateValFunc from "../../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import { toast } from "react-toastify";
import ChatMessagesApiCall from "../../../../apis/chats/ChatMessagesApiCall";
import MiniLoader from "../../../../helpers/MiniLoader";

const ChatConversations = () => {
  const [messagesState, setMessagesState] = useState("");
  const [{ token, chatBoxId, chatBoxActive, chatBoxLoading }] =
    useStateValFunc();
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
    if (chatBoxActive) {
      (async () => {
        dispatch({ type: "chatLoadingStart" });
        const response = await ChatMessagesApiCall(chatBoxId, token);
        dispatch({ type: "chatLoadingStop" });
        if (response.data.type === "success") {
          toast.success(response.data.msg);
          setMessagesState(response.data.chatMessages);
        } else {
          toast.error(response.data.msg);
        }
      })();
    }

    return () => {
      dispatch({ type: "sidebarViewOff" });
    };
  }, [chatBoxActive, chatBoxId, dispatch, token]);

  if (chatBoxLoading) {
    return (
      <>
        <MiniLoader />
      </>
    );
  }

  if (chatBoxActive && chatBoxId !== "" && messagesState !== "") {
    //HERE DISPLAY MESSAGES
    return (
      <>
        <p>{JSON.stringify(messagesState)}</p>
      </>
    );
  }

  return (
    <>
      <p>No chat Active</p>
    </>
  );
};

export default ChatConversations;
