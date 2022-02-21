import { Box, Stack, Toolbar } from "@mui/material";
import React from "react";

import AvatarComponent from "../../components/chat/chatNavigation/AvatarComponent";
import NavComponent from "../../components/chat/chatNavigation/NavComponent";
import chatNavItems from "../../helpers/chatNavItems";

const ChatNavigationPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e1f5fe",
          border: "0.5px solid #03a9f4",
          minHeight: "100vh",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "center", lg: "initial" },
          }}
        >
          <Stack>
            {/* NavItems Component */}
            {chatNavItems().map((navObj, i) => (
              <NavComponent
                title={navObj.title}
                iconComponent={navObj.iconComponent}
                href={navObj.href}
                key={i}
              />
            ))}
            {/* Avatar Component */}
            <AvatarComponent />
          </Stack>
        </Toolbar>
      </Box>
    </>
  );
};

export default ChatNavigationPage;
