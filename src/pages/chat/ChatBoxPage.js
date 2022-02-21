import { Box, Container } from "@mui/material";
import React from "react";

const ChatBoxPage = () => {
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "#81d4fa",
          backgroundColor: "#e1f5fe",
          border: "0.5px solid #03a9f4",
          height: "100vh",
        }}
      >
        <Container disableGutters sx={{ px: { xs: 1, md: 2 } }}>
          here chatbox
        </Container>
      </Box>
    </>
  );
};

export default ChatBoxPage;

// const theme = useTheme();
// const mobileViewMatches = useMediaQuery(theme.breakpoints.down("sm"));
//  disableGutters={Boolean(mobileViewMatches)}
