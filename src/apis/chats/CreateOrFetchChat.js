import axios from "axios";

const CreateOrFetchChat = async (data, token) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_CREATE_CHAT_API,
      data,
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

export default CreateOrFetchChat;
