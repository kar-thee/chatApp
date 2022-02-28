import React from "react";

import GroupChatTitle from "./components/chatBoxTitle/GroupChatTitle";
import PrivateChatTitle from "./components/chatBoxTitle/PrivateChatTitle";

const ChatBoxTitle = ({ chatBoxInfo }) => {
  const { isGroupChat } = chatBoxInfo;

  return (
    <>
      {isGroupChat === true ? (
        <GroupChatTitle chatBoxInfo={chatBoxInfo} />
      ) : (
        <PrivateChatTitle chatBoxInfo={chatBoxInfo} />
      )}
    </>
  );
};

export default ChatBoxTitle;
