import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const ChatSideBarPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "yellow",
          height: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default ChatSideBarPage;
