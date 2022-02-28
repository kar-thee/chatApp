import { Badge, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import DateTimeGetter from "../../../../helpers/DateTimeGetter";
import ProfileImgs from "../../../../helpers/ProfileImgs";
import ProfileImgsGroup from "../../../../helpers/ProfileImgsGroup";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStateValFunc from "../../../../hooks/useStateValFunc";

const ChatPreview = ({ lastMsg, chatName, isGroupChat, chatId }) => {
  const [dispatch] = useDispatchFunc();
  const [{ chatBoxId, chatBoxActive, chatNotifications }] = useStateValFunc();

  const FetchConversations = (id) => {
    dispatch({ type: "chatBoxOn", payLoad: { id } });
    dispatch({ type: "sidebarViewOff" });
    dispatch({ type: "chatNotificationsRemove", payLoad: { chatId: id } });
  };

  const notificationAvailable =
    chatNotifications.length > 0
      ? chatNotifications.find(
          (chatNotificationId) => chatNotificationId === chatId
        )
      : "";

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
          {isGroupChat ? <ProfileImgsGroup/> : <ProfileImgs />}
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

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  sx={{
                    maxWidth: { xs: "150px", md: "200px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight:
                        notificationAvailable && !chatBoxActive ? "900" : "500", //900
                      opacity: "0.8",
                      //to give nice look if no lastMSg found
                      minHeight: lastMsg ? "" : "1rem",
                      color: notificationAvailable && !chatBoxActive && "green", //""
                    }}
                    noWrap
                  >
                    {lastMsg ? lastMsg.content : ""}
                  </Typography>
                </Box>
                {/* below thing helps in notifying */}
                {notificationAvailable && !chatBoxActive && (
                  <Box sx={{ px: 2 }}>
                    <Badge
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      badgeContent=" "
                      color="success"
                      sx={{
                        ".MuiBadge-badge:hover": { backgroundColor: "green" },
                      }}
                    >
                      {" "}
                    </Badge>
                  </Box>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Divider />
      </Box>
    </>
  );
};

export default ChatPreview;
