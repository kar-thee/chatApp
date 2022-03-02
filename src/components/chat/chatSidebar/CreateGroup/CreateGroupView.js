import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import GetAllUsersApiCall from "../../../../apis/profile/GetAllUsersApiCall";
import MiniLoader from "../../../../helpers/MiniLoader";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStateValFunc from "../../../../hooks/useStateValFunc";

import ChatTitle from "../ChatTitle";
import CreateGroupForm from "./CreateGroupForm";

const CreateGroupView = () => {
  const [usersList, setUsersList] = useState("");

  const [dispatch] = useDispatchFunc();
  const [{ token, loadingState }] = useStateValFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await GetAllUsersApiCall(token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        setUsersList(response.data.allUsers);
      } else {
        setUsersList("");
        // await dispatch({ type: "sidebarViewOn" });
      }
    })();
  }, [dispatch, token]);

  const createGroupFunc = (groupInfo) => {
    //here we call api to create groupChat
    console.log(groupInfo);
    //after creating group -open created group in ChatBox

    //here return true or false
  };

  if (loadingState) {
    return (
      <>
        <MiniLoader />
      </>
    );
  }

  return (
    <>
      <Box sx={{ maxHeight: "95vh", overflowY: "scroll" }}>
        {/* this is title */}
        <>
          <ChatTitle title="Create Group" />
        </>

        {/* here will have a form to create group */}
        <CreateGroupForm
          usersList={usersList}
          createGroupFunc={createGroupFunc}
        />
      </Box>
    </>
  );
};

export default CreateGroupView;
