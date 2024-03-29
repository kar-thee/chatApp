import React, { useEffect, useState } from "react";
import useStateValFunc from "../../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import UserPreview from "./UserPreview";
import { Box } from "@mui/material";

const UsersOnline = () => {
  const [{ usersOnlineArray, socketObj, userInfo }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();
  const [liveUsers, setLiveUsers] = useState("");

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });

    if (socketObj) {
      //this will store all usersOnline
      socketObj.on("updatedOnlineUsers", (onlineUsersArray) => {
        dispatch({
          type: "updateOnlineUsers",
          payLoad: { onlineUsersArray },
        });
      });
    }

    return () => {
      dispatch({ type: "sidebarViewOff" });
    };
  }, [dispatch, socketObj]);

  useEffect(() => {
    if (usersOnlineArray) {
      // this will ensure we dont get our personal info->
      //because we need people other than ourself online here
      let users = usersOnlineArray.filter(
        (userObj) => userObj.userId !== userInfo.id
      );
      setLiveUsers(users);
    }
  }, [userInfo.id, usersOnlineArray]);

  //   useEffect(() => {
  //     //component will unmount

  //     //doing this will make mobileView to display chatsMessages
  //     //after clicking on the userOnline preview Tab -> chat btn
  //     return () => {
  //       dispatch({ type: "sidebarViewOff" });
  //     };
  //   }, [dispatch]);

  if (
    !usersOnlineArray ||
    usersOnlineArray.length < 1 ||
    !liveUsers ||
    liveUsers.length < 1
  ) {
    return (
      <>
        <h1>No online users Available</h1>
      </>
    );
  }

  return (
    <>
      <Box sx={{ maxHeight: "95vh", overflowY: "scroll" }}>
        {/* {usersOnlineArray &&
        usersOnlineArray.length > 0 &&
        JSON.stringify(usersOnlineArray)} */}
        {liveUsers.map((usersObj) => (
          <UserPreview liveUsers={usersObj} key={usersObj.userId} />
        ))}
      </Box>
    </>
  );
};

export default UsersOnline;
