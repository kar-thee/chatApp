import React from "react";

import { Avatar, Box, Stack, Typography } from "@mui/material";
import DateTimeGetter from "../../../../../helpers/DateTimeGetter";
import ChatBoxMsgTail from "../../../../../helpers/ChatBoxMsgTail";

const ReceivedMessage = ({ msg, userInfo }) => {
  //msg.sender._id !== userInfo.id

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-Start"
        alignItems="flex-Start"
        sx={{ my: 3, px: { xs: 1, md: 3 } }}
      >
        <Box sx={{ order: 0 }}>
          <Avatar
            sx={{
              backgroundColor: "#0277bd",
            }}
          >
            {msg.sender.name[0].toUpperCase()}
          </Avatar>
        </Box>
        <ChatBoxMsgTail type="in" />
        <Box
          sx={{
            padding: "6px 7px 8px 9px",
            backgroundColor: "#80d8ff",
            maxWidth: { xs: "80%", md: "70%" },
            borderRadius: "10px",
            borderStartStartRadius: "unset",
            mt: 1,
            ml: 0,
          }}
        >
          <Stack alignItems="flex-Start">
            <Typography variant="subtitle1">{msg.content}</Typography>
            <Typography sx={{ opacity: 0.7, mt: 1 }} variant="caption">
              <DateTimeGetter createdAt={msg.createdAt} />
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ReceivedMessage;
