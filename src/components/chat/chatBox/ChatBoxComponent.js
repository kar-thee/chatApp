import { Box } from "@mui/material";
import React from "react";
import useStateValFunc from "../../../hooks/useStateValFunc";
import ReceivedMessage from "./components/messages/ReceivedMessage";
import SentMessage from "./components/messages/SentMessage";

let chatMessages = [
  {
    _id: "620d35b5c4a13dd75e28c3a9",
    sender: {
      _id: "620d0396c06c84441cba3511",
      name: "karthee",
      email: "ourworldourpeople@gmail.com",
    },
    content: "Hi kiruthika...this is karthee",
    chatBox: "620d3411477e9aa1f44d705d",
    __v: 0,
    createdAt: "2022-02-18T02:02:54.698Z",
  },
  {
    _id: "620d35eead3f830b07ebf09c",
    sender: {
      _id: "620d0396c06c84441cba3511",
      name: "karthee",
      email: "ourworldourpeople@gmail.com",
    },
    content: "hope you remember me",
    chatBox: "620d3411477e9aa1f44d705d",
    __v: 0,
    createdAt: "2022-02-18T02:02:54.698Z",
  },
  {
    _id: "620d3645587fb092a7d4ebcd",
    sender: {
      _id: "620d0396c06c84441cba3511",
      name: "karthee",
      email: "ourworldourpeople@gmail.com",
    },
    content: "hope you remember me",
    chatBox: "620d3411477e9aa1f44d705d",
    createdAt: "2022-02-16T17:37:09.566Z",
    updatedAt: "2022-02-16T17:37:09.566Z",
    __v: 0,
  },
  {
    _id: "620d368ec1011fa74958cd2d",
    sender: {
      _id: "620d0396c06c84441cba3511",
      name: "karthee",
      email: "ourworldourpeople@gmail.com",
    },
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    chatBox: "620d3411477e9aa1f44d705d",
    createdAt: "2022-02-16T17:38:22.699Z",
    __v: 0,
  },
  {
    _id: "620d3abac1011fa74958cd2f",
    sender: {
      _id: "620d33fe477e9aa1f44d705b",
      name: "kiruthika",
      email: "s.keyan1997@gmail.com",
    },
    content: "2014 bharath school same bench",
    chatBox: "620d3411477e9aa1f44d705d",
    createdAt: "2022-02-16T17:56:10.271Z",
    __v: 0,
  },
  {
    _id: "620d3ad2c1011fa74958cd31",
    sender: {
      _id: "620d33fe477e9aa1f44d705b",
      name: "kiruthika",
      email: "s.keyan1997@gmail.com",
    },
    content: "yes i know",
    chatBox: "620d3411477e9aa1f44d705d",
    createdAt: "2022-02-16T17:56:34.353Z",
    __v: 0,
  },
  {
    _id: "620efd7663bc826a464c540a",
    sender: {
      _id: "620d33fe477e9aa1f44d705b",
      name: "kiruthika",
      email: "s.keyan1997@gmail.com",
    },
    content: "i love you karthee",
    chatBox: "620d3411477e9aa1f44d705d",
    createdAt: "2022-02-18T01:59:18.215Z",
    __v: 0,
  },
  {
    _id: "620efe4e7991713d677f0542",
    sender: {
      _id: "620d33fe477e9aa1f44d705b",
      name: "kiruthika",
      email: "s.keyan1997@gmail.com",
    },
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    chatBox: "620d3411477e9aa1f44d705d",
    createdAt: "2022-02-18T02:02:54.698Z",
    __v: 0,
  },
];

const ChatBoxComponent = () => {
  const [{ userInfo }] = useStateValFunc();
  return (
    <>
      <Box
        sx={{
          height: "80vh", //need to change based on typed text
          maxHeight: "80vh",
          overflowY: "scroll",
          // border: "1px solid green",
        }}
      >
        {chatMessages.map((msg) =>
          msg._id === userInfo.id ? (
            <SentMessage msg={msg} userInfo={userInfo} />
          ) : (
            <ReceivedMessage msg={msg} userInfo={userInfo} />
          )
        )}
      </Box>
    </>
  );
};

export default ChatBoxComponent;
