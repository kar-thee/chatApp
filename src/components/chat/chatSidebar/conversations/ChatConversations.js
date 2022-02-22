import React, { useState, useEffect } from "react";
import useStateValFunc from "../../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import { toast } from "react-toastify";
import ChatMessagesApiCall from "../../../../apis/chats/ChatMessagesApiCall";
import MiniLoader from "../../../../helpers/MiniLoader";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const ChatConversations = () => {
  const [messagesState, setMessagesState] = useState("");
  const [{ token, chatBoxId, chatBoxActive, chatBoxLoading, sideBarView }] =
    useStateValFunc();
  const [dispatch] = useDispatchFunc();

  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
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
  }, [chatBoxActive, chatBoxId, dispatch, token]);

  useEffect(() => {
    // settingSidebarViewOff in mobileView to get only Conversations onScreen
    // dispatch({ type: "sidebarViewOff" });

    // here for mobile view ->do cleanup for not highlighting msgBox and unnecessary socket msg delivery
    if (
      chatBoxActive &&
      chatBoxId !== "" &&
      sideBarView === true &&
      mobileView === true
    ) {
      dispatch({ type: "chatBoxOff" });
    }
  }, [chatBoxActive, chatBoxId, dispatch, mobileView, sideBarView]);

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
