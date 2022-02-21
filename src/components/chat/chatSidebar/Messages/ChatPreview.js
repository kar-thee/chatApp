import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import DateTimeGetter from "../../../../helpers/DateTimeGetter";
import ProfileImgs from "../../../../helpers/ProfileImgs";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";

const ChatPreview = ({ lastMsg, chatName, isGroupChat, chatId }) => {
  const [dispatch] = useDispatchFunc();

  const FetchConversations = (id) => {
    dispatch({ type: "fetchConversation", payLoad: { id } });
  };

  return (
    <>
      <Box
        sx={{
          pb: 0.5,
          cursor: "pointer",
          "& :hover": { backgroundColor: "#80d8ff" },
        }}
        onClick={() => FetchConversations(chatId)}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {isGroupChat ? "" : <ProfileImgs />}
          <Box sx={{ pb: 0.5, width: "100%" }}>
            <Stack spacing={1}>
              <Stack justifyContent="space-between" direction="row">
                <Box sx={{ maxWidth: "100px" }}>
                  <Typography variant="h6" sx={{ fontWeight: "500" }} noWrap>
                    {chatName}
                  </Typography>
                </Box>
                <Typography
                  variant="overline"
                  sx={{
                    opacity: "0.5",
                    color: "#01579b",
                    display: { xs: "none", md: "unset" },
                  }}
                >
                  <DateTimeGetter createdAt={lastMsg.createdAt} />
                </Typography>
              </Stack>
              <Box sx={{ maxWidth: { xs: "150px", md: "200px" } }}>
                <Typography sx={{ fontWeight: "500", opacity: "0.8" }} noWrap>
                  {lastMsg.content}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Divider />
      </Box>
    </>
  );
};

export default ChatPreview;
