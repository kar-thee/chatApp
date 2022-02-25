import { Grid } from "@mui/material";
import React from "react";

import useStateValFunc from "../../hooks/useStateValFunc";
// import useDispatchFunc from "../../hooks/useDispatchFunc";
import ChatNavigationPage from "./ChatNavigationPage";
import ChatBoxPage from "./ChatBoxPage";
import ChatSideBarPage from "./ChatSideBarPage";

const ChatLayout = () => {
  const [{ sideBarView }] = useStateValFunc();

  // const [dispatch] = useDispatchFunc();

  // // sidebarView handling in mobileview
  // const setSideBarViewOn = () => {
  //   dispatch({ type: "sidebarViewOn" });
  // };
  // const setSideBarViewOff = () => {
  //   dispatch({ type: "sidebarViewOff" });
  // };
  // const sidebarViewClickandler = () => {
  //   sideBarView ? setSideBarViewOff() : setSideBarViewOn();
  // };

  return (
    <>
      <Grid container sx={{ maxWidth: "100vw", overflow: "hidden" }}>
        {/* this will be navigationBar */}
        <Grid item xs={2} md={1} lg={1.5} xl={1.5} maxHeight="100vh">
          <ChatNavigationPage />
        </Grid>

        {/* this will be chatBox */}
        <Grid
          item
          xs={10}
          // sm={6.5}
          md={7}
          lg={7.5}
          xl={7.5}
          sx={{ display: { xs: sideBarView ? "none" : "unset", md: "unset" } }}
          maxHeight="10vh"
        >
          <ChatBoxPage />
        </Grid>

        {/* this will be Sidebar */}
        <Grid
          item
          xs={10}
          // sm={3.5}
          md={4}
          lg={3}
          xl={3}
          sx={{ display: { xs: sideBarView ? "unset" : "none", md: "unset" } }}
          maxHeight="100vh"
        >
          <ChatSideBarPage />
        </Grid>
      </Grid>
    </>
  );
};

export default ChatLayout;
