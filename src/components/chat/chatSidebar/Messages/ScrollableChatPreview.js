import { Box } from "@mui/material";
import React from "react";
import ChatPreview from "./ChatPreview";

const ScrollableChatPreview = ({ chatArray }) => {
  return (
    <>
      <Box
        sx={
          chatArray.length > 5 ? { maxHeight: "90vh", overflowY: "scroll" } : {}
        }
      >
        {chatArray.map((chat) => (
          <ChatPreview
            key={chat.id}
            lastMsg={chat.lastMsg}
            chatName={chat.chatName}
            isGroupChat={chat.isGroupChat}
            chatId={chat.id}
          />
        ))}
      </Box>
    </>
  );
};

export default ScrollableChatPreview;
