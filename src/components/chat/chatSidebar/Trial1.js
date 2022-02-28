import { Typography } from "@mui/material";
import React from "react";
import MiniLoader from "../../../helpers/MiniLoader";
import UserProfileImg from "../../../helpers/UserProfileImg";

const Trial = () => {
  return (
    <>
      <Typography variant="h1">Hello</Typography>
      {/* <UserProfileImg /> */}
      <MiniLoader />
    </>
  );
};

export default Trial;
