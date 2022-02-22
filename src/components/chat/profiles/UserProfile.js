import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MiniLoader from "../../../helpers/MiniLoader";

import useStateValFunc from "../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../hooks/useDispatchFunc";
import UserProfileApiCall from "../../../apis/profile/UserProfileApiCall";
import { Box, Stack, Typography } from "@mui/material";
import UserProfileImg from "../../../helpers/UserProfileImg";

import FaceIcon from "@mui/icons-material/Face";
import EmailIcon from "@mui/icons-material/Email";
import ChatTitle from "../chatSidebar/ChatTitle";
const UserProfile = () => {
  const [profileState, setProfileState] = useState();
  const { userId } = useParams();
  const [{ token, loadingState }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
    (async () => {
      dispatch({ type: "loadingStart" });
      const response = await UserProfileApiCall(userId, token);
      dispatch({ type: "loadingStop" });
      if (response.data.type === "success") {
        toast.success(response.data.msg);
        setProfileState(response.data.userData);
      } else {
        toast.error(response.data.msg);
      }
    })();

    return () => {
      dispatch({ type: "sidebarViewOff" });
    };
  }, [dispatch, token, userId]);

  if (loadingState) {
    return (
      <>
        <MiniLoader />
      </>
    );
  }

  return (
    <>
      <>
        <ChatTitle title="User Profile" />
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
        <UserProfileImg />
      </Box>

      <Stack
        sx={{ py: 5, my: 5, width: "100%" }}
        spacing={3}
        justifyContent="center"
        alignItems="space-between"
      >
        <Stack direction="row" spacing={3} sx={{ pl: 1, alignItems: "center" }}>
          <Box>
            <FaceIcon sx={{ color: "#039be5" }} fontSize="large" />
          </Box>
          <Typography noWrap>{profileState && profileState.name}</Typography>
        </Stack>
        <Stack direction="row" spacing={3} sx={{ pl: 1 }}>
          <Box>
            <EmailIcon sx={{ color: "#039be5" }} fontSize="large" />
          </Box>
          <Typography noWrap>{profileState && profileState.email}</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default UserProfile;
