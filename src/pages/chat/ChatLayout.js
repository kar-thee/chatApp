import { Grid } from "@mui/material";
import React from "react";

import useStateValFunc from "../../hooks/useStateValFunc";
import useDispatchFunc from "../../hooks/useDispatchFunc";
import ChatNavigationPage from "./ChatNavigationPage";
import ChatBoxPage from "./ChatBoxPage";
import ChatSideBarPage from "./ChatSideBarPage";

const ChatLayout = () => {
  const [{ sideBarView }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();

  // sidebarView handling in mobileview
  const setSideBarViewOn = () => {
    dispatch({ type: "sidebarViewOn" });
  };
  const setSideBarViewOff = () => {
    dispatch({ type: "sidebarViewOff" });
  };
  const sidebarViewClickandler = () => {
    sideBarView ? setSideBarViewOff() : setSideBarViewOn();
  };

  return (
    <>
      <Grid container>
        {/* this will be navigationBar */}
        <Grid
          item
          xs={2}
          md={2}
          lg={1.5}
          onClick={() => sidebarViewClickandler()}
          maxHeight="100vh"
        >
          <ChatNavigationPage />
        </Grid>

        {/* this will be chatBox */}
        <Grid
          item
          xs={sideBarView ? 0 : 10}
          sm={6.5}
          md={7}
          lg={7.5}
          maxHeight="10vh"
        >
          <ChatBoxPage />
        </Grid>

        {/* this will be Sidebar */}
        <Grid
          item
          xs={sideBarView ? 10 : 0}
          sm={3.5}
          md={3}
          lg={3}
          maxHeight="100vh"
        >
          <ChatSideBarPage />
        </Grid>
      </Grid>
    </>
  );
};

export default ChatLayout;
