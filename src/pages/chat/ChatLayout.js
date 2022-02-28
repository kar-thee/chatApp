import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";

import useStateValFunc from "../../hooks/useStateValFunc";
import useDispatchFunc from "../../hooks/useDispatchFunc";

import { io } from "socket.io-client";

import ChatNavigationPage from "./ChatNavigationPage";
import ChatBoxPage from "./ChatBoxPage";
import ChatSideBarPage from "./ChatSideBarPage";

const ChatLayout = () => {
  const [{ sideBarView, socketObj, userInfo }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();
  //we need a flag to check whether component mounted or not to solve operation
  //on unmounted component
  let isMountedRef = useRef(true);

  useEffect(() => {
    // connect socket io server
    const socketConnection = io(process.env.REACT_APP_SERVER_DOMAIN);
    dispatch({
      type: "socketConnected",
      payLoad: { socketObj: socketConnection },
    });

    return () => {
      // socketObj state is set to null
      dispatch({ type: "socketDisConnected" });
    };
  }, [dispatch]);

  useEffect(() => {
    isMountedRef.current = true;

    if (socketObj) {
      socketObj.emit("saveUser", userInfo);
    }

    return () => {
      // memory leaks no op blah blah blah..
      if (isMountedRef.current && socketObj) {
        //when component unmounts or logout fired
        socketObj.emit("removeUser", userInfo);
      }
      isMountedRef.current = false;
    };
  }, [socketObj, userInfo]);

  useEffect(() => {
    if (socketObj) {
      //this will store all usersOnline
      socketObj.on("updatedOnlineUsers", (onlineUsersArray) => {
        dispatch({
          type: "updateOnlineUsers",
          payLoad: { onlineUsersArray },
        });
      });
    }
  }, [dispatch, socketObj]);

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
