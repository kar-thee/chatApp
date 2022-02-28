import axios from "axios";

const GetAllUsersApiCall = async (token) => {
  try {
    const response = await axios.get(process.env.REACT_APP_GET_ALL_USERS_API, {
      headers: {
        authorization: `BEARER ${token}`,
      },
    });

    return response;
  } catch (err) {
    return err.response;
  }
};

export default GetAllUsersApiCall;
