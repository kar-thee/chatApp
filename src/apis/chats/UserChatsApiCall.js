import axios from "axios";

const UserChatsApiCall = async (userId, token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_USER_CHATS_API}/${userId}`,
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

export default UserChatsApiCall;
