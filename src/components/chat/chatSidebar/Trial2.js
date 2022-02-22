import { Avatar, Box, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import GroupProfileImg from "../../../helpers/GroupProfileImg";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";

import useDispatchFunc from "../../../hooks/useDispatchFunc";

const Trial2 = () => {
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
  }, [dispatch]);
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
      <GroupProfileImg />
    </>
  );
};

export default Trial2;
