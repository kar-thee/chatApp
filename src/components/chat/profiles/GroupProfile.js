import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MiniLoader from "../../../helpers/MiniLoader";

import useStateValFunc from "../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";
import { Box, Stack, Typography } from "@mui/material";

import ChatTitle from "../chatSidebar/ChatTitle";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupsIcon from "@mui/icons-material/Groups";

import UserChatsApiCall from "../../../apis/chats/UserChatsApiCall";
import GroupProfileImg from "../../../helpers/GroupProfileImg";
import SearchUserPreview from "../chatSidebar/SearchUsers/SearchUserPreview";

const GroupProfile = () => {
  const [groupProfileState, setGroupProfileState] = useState("");
  const { groupId } = useParams();
  const [{ token, loadingState, userInfo }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await UserChatsApiCall(userInfo.id, token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        toast.success(response.data.msg);
        //we get all chats of this user then filter only with the groupid,
        //got from useParams hook and also it is a groupchat (additional checking)
        let groupObj = response.data.chatBoxes.filter(
          (chatBoxObj) =>
            chatBoxObj.id === groupId && chatBoxObj.isGroupChat === true
        );
        //an array with single obj
        setGroupProfileState(groupObj);
      } else {
        toast.error(response.data.msg);
      }
    })();

    // return () => {
    //   dispatch({ type: "sidebarViewOff" });
    // };
  }, [dispatch, groupId, token, userInfo.id]);

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
        <>
          <ChatTitle title="Group Profile" />
        </>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 5,
            mt: 5,
          }}
        >
          <GroupProfileImg />
        </Box>

        <Stack
          sx={{ py: 5, my: 5, width: "100%" }}
          spacing={3}
          justifyContent="center"
          alignItems="space-between"
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ pl: 1, alignItems: "center" }}
          >
            <Box>
              <GroupsIcon sx={{ color: "#039be5" }} fontSize="large" />
            </Box>
            <Typography noWrap>
              Name : {groupProfileState && groupProfileState[0].chatName}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ pl: 1 }}>
            <Box>
              <AdminPanelSettingsIcon
                sx={{ color: "#039be5" }}
                fontSize="large"
              />
            </Box>
            <Typography noWrap>
              Admin :{" "}
              {groupProfileState &&
                groupProfileState[0].members.find(
                  (memberObj) =>
                    memberObj._id === groupProfileState[0].adminUser
                )["name"]}
            </Typography>
          </Stack>
          <Box>
            {groupProfileState && (
              <>
                <Typography
                  sx={{ pl: 2, pb: 2, color: "#03a9f4" }}
                  variant="h6"
                >
                  Group Members :
                </Typography>
                {groupProfileState[0].members.map((memberObj) => (
                  <SearchUserPreview
                    searchFoundArray={memberObj}
                    key={memberObj._id}
                  />
                ))}
              </>
            )}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default GroupProfile;
