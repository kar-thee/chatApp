import { Avatar, Box } from "@mui/material";
import React from "react";

import PersonIcon from "@mui/icons-material/Person";

const ProfileImgs = () => {
  return (
    <>
      <Box>
        <Avatar
          sx={{
            backgroundColor: "#03a9f4",
            ":hover": { backgroundColor: "#03a9f4" },
          }}
        >
          <PersonIcon
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

export default ProfileImgs;
