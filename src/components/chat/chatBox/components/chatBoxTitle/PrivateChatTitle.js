import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileImgs from "../../../../../helpers/ProfileImgs";

const PrivateChatTitle = ({ chatBoxInfo }) => {
  const { chatName, chatSubtitle, chatProfile } = chatBoxInfo;
  const navigate = useNavigate();

  const ProfileClickHandler = () => {
    navigate(`profile/${chatProfile}`);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#80d8ff", py: 0.5 }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ pl: 1, cursor: "pointer" }}
          onClick={() => ProfileClickHandler()}
        >
          <IconButton onClick={() => ProfileClickHandler()}>
            <ProfileImgs />
          </IconButton>
          <Box sx={{ pb: 0.5, width: "100%" }}>
            <Stack spacing={1}>
              <Box sx={{ maxWidth: "100px" }}>
                <Typography variant="h6" sx={{ fontWeight: "500" }} noWrap>
                  {chatName}
                </Typography>
              </Box>

              <Box sx={{ maxWidth: { xs: "150px", md: "200px" } }}>
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

export default PrivateChatTitle;
