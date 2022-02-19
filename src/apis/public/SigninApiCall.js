import axios from "axios";

const SigninApiCall = async (data) => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_API, data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export default SigninApiCall;
