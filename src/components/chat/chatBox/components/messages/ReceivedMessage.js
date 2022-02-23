import React from "react";

import { Avatar, Box, Stack, Typography } from "@mui/material";
import DateTimeGetter from "../../../../../helpers/DateTimeGetter";

const ReceivedMessage = ({ msg, userInfo }) => {
  //msg.sender._id !== userInfo.id
  return (
    <>
      <Stack
        key={msg._id}
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

        <Box
          sx={{
            padding: "6px 7px 8px 9px",
            backgroundColor: "#80d8ff",
            maxWidth: { xs: "80%", md: "70%" },
            borderRadius: "10px",
            mt: msg.sender._id !== userInfo.id ? 2 : "",
            ml: msg.sender._id !== userInfo.id ? 1 : "",
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
