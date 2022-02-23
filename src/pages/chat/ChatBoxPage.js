import { Box, Container } from "@mui/material";
import React from "react";
import ChatConversations from "../../components/chat/chatBox/ChatConversations";

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
        <Container
          disableGutters
          //  sx={{ px: { xs: 0.2, md: 0.5 } }}
        >
          {/* here chatbox */}
          <ChatConversations />
        </Container>
      </Box>
    </>
  );
};

export default ChatBoxPage;

// const theme = useTheme();
// const mobileViewMatches = useMediaQuery(theme.breakpoints.down("sm"));
//  disableGutters={Boolean(mobileViewMatches)}
