import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import GroupProfileImg from "../../../helpers/GroupProfileImg";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
const Trial2 = () => {
  return (
    <>
      Trial2
      <Box>
        <IconButton>
          <Avatar sx={{ backgroundColor: "#03a9f4" }}>
            <GroupsIcon />
          </Avatar>
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <Avatar sx={{ backgroundColor: "#03a9f4" }}>
            <PersonIcon />
          </Avatar>
        </IconButton>
      </Box>
      {/* <GroupProfileImg /> */}
    </>
  );
};

export default Trial2;
