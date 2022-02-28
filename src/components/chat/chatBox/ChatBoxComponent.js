import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import useStateValFunc from "../../../hooks/useStateValFunc";
import ReceivedMessage from "./components/messages/ReceivedMessage";
import SentMessage from "./components/messages/SentMessage";

const ChatBoxComponent = ({ chatMessages }) => {
  const [{ userInfo }] = useStateValFunc();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <>
      <Box
        sx={{
          height: "80vh", //need to change based on typed text
          maxHeight: "75vh",
          overflowY: "scroll",
          // border: "1px solid green",
        }}
      >
        {chatMessages.map((msg) =>
          msg.sender._id === userInfo.id ? (
            <SentMessage
              msg={msg}
              userInfo={userInfo}
              key={
                msg._id || `${msg.content},${msg.createdAt},${Math.random()}`
              } //we required a unique key for msg sent by us
            />
          ) : (
            <ReceivedMessage
              msg={msg}
              userInfo={userInfo}
              key={
                msg._id || `${msg.content},${msg.createdAt},${Math.random()}`
              } //we required a unique key for msg from socket-io
            />
          )
        )}
        {/* here we need to make a smooth scrolling to end of the chatBox */}
        <div ref={scrollRef}></div>
      </Box>
    </>
  );
};

export default ChatBoxComponent;
