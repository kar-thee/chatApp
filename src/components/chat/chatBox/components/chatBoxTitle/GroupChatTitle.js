import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileImgsGroup from "../../../../../helpers/ProfileImgsGroup";

const GroupChatTitle = ({ chatBoxInfo }) => {
  const { id, chatName, chatSubtitle } = chatBoxInfo;
  const navigate = useNavigate();

  const GroupClickHandler = () => {
    navigate(`groupprofile/${id}`);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#80d8ff", py: 0.5 }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ pl: 1, cursor: "pointer" }}
          onClick={() => GroupClickHandler()}
        >
          <IconButton onClick={() => GroupClickHandler()}>
            <ProfileImgsGroup />
          </IconButton>
          <Box sx={{ pb: 0.5, width: "100%", pt: 0.5 }}>
            <Stack spacing={1}>
              <Box sx={{ maxWidth: "220px" }}>
                <Typography variant="h6" sx={{ fontWeight: "500" }} noWrap>
                  {chatName}
                </Typography>
              </Box>

              <Box sx={{ maxWidth: "220px" }}>
                <Typography sx={{ fontWeight: "500", opacity: "0.8" }} noWrap>
                  {chatSubtitle}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default GroupChatTitle;
