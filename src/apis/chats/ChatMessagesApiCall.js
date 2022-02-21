import axios from "axios";

const ChatMessagesApiCall = async (chatId, token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CHAT_MESSAGES_API}/${chatId}`,
      {
        headers: {
          authorization: `BEARER ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export default ChatMessagesApiCall;
