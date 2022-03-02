import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CreateGroupApiCall from "../../../../apis/group/CreateGroupApiCall";
import GetAllUsersApiCall from "../../../../apis/profile/GetAllUsersApiCall";
import MiniLoader from "../../../../helpers/MiniLoader";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStateValFunc from "../../../../hooks/useStateValFunc";

import ChatTitle from "../ChatTitle";
import CreateGroupForm from "./CreateGroupForm";

const CreateGroupView = () => {
  const [usersList, setUsersList] = useState("");

  const [dispatch] = useDispatchFunc();
  const [{ token, loadingState, userInfo }] = useStateValFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await GetAllUsersApiCall(token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        //need to remove this person's (creator's) data,
        //person who creating group will be automatically added in backend
        let others = response.data.allUsers.filter(
          (userObj) => userObj._id !== userInfo.id
        );
        setUsersList(others);
      } else {
        setUsersList("");
        // await dispatch({ type: "sidebarViewOn" });
      }
    })();
  }, [dispatch, token, userInfo.id]);

  const createGroupFunc = async (groupInfoObj) => {
    //here we call api to create groupChat
    console.log(groupInfoObj);
    dispatch({ type: "loadingStart" });
    const response = await CreateGroupApiCall(groupInfoObj, token);
    dispatch({ type: "loadingStop" });
    if (response.data.type === "success") {
      //for mobile view -disable sidebarView, so chatBox will be displayed
      dispatch({ type: "sidebarViewOff" });

      toast.success(response.data.msg);

      //this will open the newly created group chat
      dispatch({
        type: "chatBoxOn",
        payLoad: { id: response.data.chatCreated[0]._id },
      });
    } else {
      toast.error(response.data.msg);
    }
    //after creating group -open created group in ChatBox
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
          userInfo={userInfo}
        />
      </Box>
    </>
  );
};

export default CreateGroupView;
