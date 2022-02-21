import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const ChatSideBarPage = () => {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#4fc3f7",
          backgroundColor: "#e1f5fe",
          height: "100vh",
          border: "0.5px solid #03a9f4",
        }}
      >
        <Container disableGutters sx={{ px: { xs: 0.5 } }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default ChatSideBarPage;
