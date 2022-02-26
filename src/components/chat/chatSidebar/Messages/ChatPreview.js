import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import DateTimeGetter from "../../../../helpers/DateTimeGetter";
import ProfileImgs from "../../../../helpers/ProfileImgs";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStateValFunc from "../../../../hooks/useStateValFunc";

const ChatPreview = ({ lastMsg, chatName, isGroupChat, chatId }) => {
  const [dispatch] = useDispatchFunc();
  const [{ chatBoxId, chatBoxActive }] = useStateValFunc();

  const FetchConversations = (id) => {
    dispatch({ type: "chatBoxOn", payLoad: { id } });
    dispatch({ type: "sidebarViewOff" });
  };

  return (
    <>
      <Box
        sx={
          chatBoxActive && chatBoxId === chatId
            ? {
                pb: 0.5,
                px: 1,
                cursor: "pointer",
                "& :hover": { backgroundColor: "#80d8ff" },
                backgroundColor: "#80d8ff",
                opacity: 0.9,
              }
            : {
                pb: 0.5,
                px: 1,
                cursor: "pointer",
                "& :hover": { backgroundColor: "#80d8ff" },
              }
        }
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
                {lastMsg ? (
                  <>
                    <Typography
                      variant="overline"
                      sx={{
                        opacity: "0.5",
                        color: "#01579b",
                        display: { xs: "none", md: "unset" },
                      }}
                    >
                      <DateTimeGetter
                        createdAt={lastMsg.createdAt || new Date()}
                      />
                    </Typography>{" "}
                  </>
                ) : (
                  ""
                )}
              </Stack>
              <Box sx={{ maxWidth: { xs: "150px", md: "200px" } }}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    opacity: "0.8",
                    //to give nice look if no lastMSg found
                    minHeight: lastMsg ? "" : "1rem",
                  }}
                  noWrap
                >
                  {lastMsg ? lastMsg.content : ""}
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
