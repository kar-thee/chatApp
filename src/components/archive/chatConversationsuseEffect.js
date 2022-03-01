// console.log(chatId === chatBoxId, "chatId === chatBoxId");

// if (chatBoxInfo && chatId === chatBoxId) {
//   console.log(chatBoxId, "chatBoxId in if club");
//   console.log(chatId, "chatId in if club");
//   console.log(chatBoxInfo.id, "chatBoxInfo.id in if club");
//   console.log(receivedMsgObj, " receivedMsgObj");
//   console.log(chatBoxInfo, "chatBoxInfo");

//   // chatBoxInfo is available and has receiverId available in chatBoxInfo
//   if (chatBoxInfo) {
//     // msgReceiver is not sender  && chatBox is active  && chatBoxId is same
//     if (
//       senderId !== userInfo.id &&
//       chatBoxActive &&
//       chatId === chatBoxId
//     ) {
//       //now you can update the message state
//       //check condition before setting in array to avoid duplicates
//       let lastMsg = messagesState[messagesState.length - 1];
//       lastMsg.content !== msgObj.content &&
//         lastMsg.createdAt !== msgObj.createdAt &&
//         setMessagesState((prev) => [...prev, msgObj]);

//       //here we update chatBox preview
//       dispatch({ type: "newMsgAddedTrue" });
//     }
//   }
// }
