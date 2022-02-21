import { Box, Typography } from "@mui/material";
import React from "react";

const ChatTitle = ({ title }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#80d8ff", py: 0.5 }}>
        <Typography variant="h4" align="center" noWrap>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default ChatTitle;
