import axios from "axios";

const SearchUserApiCall = async (searchKeyword, token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SEARCH_USER_API}/${searchKeyword}`,
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

export default SearchUserApiCall;
