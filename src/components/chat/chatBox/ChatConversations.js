import React, { useState, useEffect } from "react";
import useStateValFunc from "../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";
import { toast } from "react-toastify";
import ChatMessagesApiCall from "../../../apis/chats/ChatMessagesApiCall";
import MiniLoader from "../../../helpers/MiniLoader";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import ChatBoxTitle from "./ChatBoxTitle";
import ChatBoxComponent from "./ChatBoxComponent";

const ChatConversations = () => {
  const [messagesState, setMessagesState] = useState("");
  const [chatBoxInfo, setChatBoxInfo] = useState("");

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
          // storing chat msgs and chatBoxInfo in states
          setMessagesState(response.data.chatMessages);
          setChatBoxInfo(response.data.chatBoxInfo);
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

  if (
    chatBoxActive &&
    chatBoxId !== "" &&
    messagesState !== "" &&
    chatBoxInfo !== ""
  ) {
    //HERE DISPLAY MESSAGES only if state has values and chatBoxActive is true
    return (
      <>
        <ChatBoxTitle chatBoxInfo={chatBoxInfo} />
        <ChatBoxComponent />
      </>
    );
  }

  return (
    // here display "no chat selected/Active"
    <>
      <div>No chat Active</div>
    </>
  );
};

export default ChatConversations;
