import React, { useState, useEffect } from "react";

import useStateValFunc from "../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";

import { toast } from "react-toastify";

import ChatMessagesApiCall from "../../../apis/chats/ChatMessagesApiCall";
import CreateMsgApiCall from "../../../apis/chats/CreateMsgApiCall";

import MiniLoader from "../../../helpers/MiniLoader";

import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";

import ChatBoxTitle from "./ChatBoxTitle";
import ChatBoxComponent from "./ChatBoxComponent";
import ChatBoxTyper from "./ChatBoxTyper";

const ChatConversations = () => {
  const [messagesState, setMessagesState] = useState("");
  const [chatBoxInfo, setChatBoxInfo] = useState("");
  const [chatIdActive, setChatIdActive] = useState("");

  const [
    {
      token,
      userInfo,
      chatBoxId,
      chatBoxActive,
      chatBoxLoading,
      sideBarView,
      socketObj,
    },
  ] = useStateValFunc();
  const [dispatch] = useDispatchFunc();

  const theme = useTheme();
  //this helps in changing sidebarView in mobile screens
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
          setChatIdActive(response.data.chatBoxInfo.id);
        } else {
          toast.error(response.data.msg);
        }
      })();
    }
  }, [chatBoxActive, chatBoxId, dispatch, token]);

  useEffect(() => {
    // settingSidebarViewOff in mobileView to get only Conversations onScreen
    //dispatch({ type: "sidebarViewOff" });

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

  useEffect(() => {
    if (!socketObj) {
      return;
    }
    //to update msgState when new msg received
    socketObj.on("receivedMsg", (receivedMsgObj) => {
      const { senderId, chatId, msgObj } = receivedMsgObj;

      const sendNotification = () => {
        // msgReceiver is not sender  && chatBox is inactive
        if (
          senderId !== userInfo.id &&
          (chatIdActive !== chatId || !chatIdActive)
        ) {
          //senderId !== userInfo.id &&
          //now you can give notifications
          dispatch({ type: "newMsgAddedTrue" });
          dispatch({
            type: "chatNotificationsAdd",
            payLoad: { chatId },
          });
        }
      };
      sendNotification();

      const addMsgTochatBox = () => {
        if (
          senderId !== userInfo.id &&
          chatBoxId === chatId &&
          chatBoxActive &&
          chatId === chatIdActive
        ) {
          setMessagesState((prevState) => {
            //this is to avoid duplicate entries
            let lastMsgObj = prevState[prevState.length - 1];
            //if no chats available ->
            if (lastMsgObj.length < 1) {
              return prevState;
            }
            //this is to avoid duplicate entries
            if (
              lastMsgObj.content === msgObj.content &&
              lastMsgObj.createdAt === msgObj.createdAt
            ) {
              return prevState;
            }
            //this is to prevent msg leak to other chatBox
            return prevState.find(
              (msgStateObj) => msgStateObj.chatBox === chatId
            )
              ? [...prevState, msgObj]
              : prevState;
          });
          console.log("add msg");
        }
      };
      if (chatBoxActive && chatId === chatBoxId) {
        addMsgTochatBox();
      }
    });
  }, [
    chatBoxActive,
    chatBoxId,
    chatIdActive,
    dispatch,
    socketObj,
    userInfo.id,
  ]);

  if (chatBoxLoading) {
    // show loading component
    return (
      <>
        <MiniLoader />
      </>
    );
  }

  //socketFunc to emit msg to socket server
  const sendMsgToSocket = (sendingMsgObj) => {
    socketObj.emit("sendMsg", sendingMsgObj);
  };

  // below func helps in sending msg to server and update the chatBoxMsgState
  const sendTypedMsg = async (typedMsg) => {
    //adding msg to available msg state
    const msgObj = {
      sender: {
        _id: userInfo.id,
        name: userInfo.name,
      },
      content: typedMsg,
      createdAt: new Date().toISOString(),
    };
    setMessagesState((prev) => [...prev, msgObj]);

    //sending msg to server
    const body = {
      chatBox: chatBoxId,
      sender: userInfo.id,
      content: typedMsg,
    };
    //here add smallLoader to indicate the msg sent is successful/failed -later
    const response = await CreateMsgApiCall(body, token);
    // if response successful,refresh chatPreview
    if (response.data.type === "success") {
      //sending msg to socket
      const sendingMsgObj = {
        msgObj,
        senderId: userInfo.id,
        chatId: chatBoxInfo.id,
        // this can be reused for group [find to filter]
        receiverObj: chatBoxInfo.members.find(
          (memberObj) => memberObj._id !== userInfo.id
        ),
      };
      sendMsgToSocket(sendingMsgObj);
      dispatch({ type: "newMsgAddedTrue" });
    }
  };

  if (
    chatBoxActive &&
    chatBoxId !== "" &&
    messagesState !== "" &&
    chatBoxInfo !== ""
  ) {
    //HERE DISPLAY MESSAGES only if state has values and chatBoxActive is true
    return (
      <>
        <Box sx={{ maxHeight: "100vh", overflow: "hidden" }}>
          <ChatBoxTitle chatBoxInfo={chatBoxInfo} />
          <ChatBoxComponent chatMessages={messagesState} />
          <ChatBoxTyper
            sendTypedMsg={sendTypedMsg}
            chatBoxId={chatBoxInfo.id}
          />
        </Box>
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
