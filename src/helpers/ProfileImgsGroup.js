import { Avatar, Box } from "@mui/material";
import React from "react";

import GroupIcon from "@mui/icons-material/Group";

const ProfileImgsGroup = () => {
  return (
    <>
      <Box>
        <Avatar
          sx={{
            backgroundColor: "#03a9f4",
            ":hover": { backgroundColor: "#03a9f4" },
          }}
        >
          <GroupIcon
            sx={{
              backgroundColor: "#03a9f4",
              ":hover": { backgroundColor: "#03a9f4" },
            }}
          />
        </Avatar>
      </Box>
    </>
  );
};

export default ProfileImgsGroup;
