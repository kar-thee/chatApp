import { Box } from "@mui/material";
import React from "react";
import useStateValFunc from "../../../hooks/useStateValFunc";
import ReceivedMessage from "./components/messages/ReceivedMessage";
import SentMessage from "./components/messages/SentMessage";

const ChatBoxComponent = ({ chatMessages }) => {
  const [{ userInfo }] = useStateValFunc();
  return (
    <>
      <Box
        sx={{
          height: "80vh", //need to change based on typed text
          maxHeight: "76vh",
          overflowY: "scroll",
          // border: "1px solid green",
        }}
      >
        {chatMessages.map((msg) =>
          msg.sender._id === userInfo.id ? (
            <SentMessage
              msg={msg}
              userInfo={userInfo}
              key={msg._id || msg.content}
            />
          ) : (
            <ReceivedMessage
              msg={msg}
              userInfo={userInfo}
              key={msg._id || msg.content}
            />
          )
        )}
        {/* here we need to make a smooth scrolling to end of the chatBox */}
      </Box>
    </>
  );
};

export default ChatBoxComponent;
