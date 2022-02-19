import axios from "axios";

const SignupApiCall = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_API, body);
    return response;
  } catch (err) {
    return err.response;
  }
};

export default SignupApiCall;
