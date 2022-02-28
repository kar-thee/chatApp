import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileImgs from "../../../../helpers/ProfileImgs";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useNavigate } from "react-router-dom";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";
import useStateValFunc from "../../../../hooks/useStateValFunc";

import { toast } from "react-toastify";
import CreateOrFetchChat from "../../../../apis/chats/CreateOrFetchChat";
import MiniLoader from "../../../../helpers/MiniLoader";

const SearchUserPreview = ({ searchFoundArray }) => {
  const { name, email, _id } = searchFoundArray;

  let userName = name;
  let userEmail = email;
  let userId = _id;

  const [anchorEl, setAnchorEl] = useState();
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  const [dispatch] = useDispatchFunc();
  const [{ token, loadingState }] = useStateValFunc();

  const toggleMenu = () => {
    setMenuState((prevState) => !prevState);
  };

  useEffect(() => {
    //component will unmount

    //doing this will make mobileView to display chatsMessages
    //after clicking on the userOnline preview Tab -> chat btn
    return () => {
      dispatch({ type: "sidebarViewOff" });
    };
  }, [dispatch]);

  const handleClick = (event) => {
    toggleMenu();
    setAnchorEl(event.currentTarget);
  };

  const profileClickHandler = (id) => {
    //close the menu
    toggleMenu();

    navigate(`/chatApp/profile/${id}`);
  };

  const FetchConversations = async (id) => {
    //close the menu
    toggleMenu();

    //here we fetch if a chat already present or create new chat
    // with the current user selected
    const body = {
      //here member is userId with whom want to chat
      member: id,
    };
    dispatch({ type: "loadingStart" });
    const response = await CreateOrFetchChat(body, token);
    dispatch({ type: "loadingStop" });
    if (response.data.type === "success") {
      //for mobile view
      dispatch({ type: "sidebarViewOff" });

      toast.success(response.data.msg);
      //from the response we get chatId and open chatBox
      let chatFetched = response.data.chatCreated[0];
      await dispatch({
        type: "chatBoxOn",
        payLoad: { id: chatFetched._id },
      });

      //for mobile view
      await dispatch({ type: "sidebarViewOff" });
      //awaiting dispatch helps in keeping chatView On since,
      //added logic to close chatBox if sideBarView is On
      //in ChatConversation component's useEffect
    } else {
      toast.error(response.data.msg);
    }
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
      <>
        <Box
          sx={
            false
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
          onClick={(ev) => handleClick(ev)}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <ProfileImgs />

            <Box sx={{ pb: 0.5, width: "100%" }}>
              <Stack spacing={1}>
                <Stack justifyContent="space-between" direction="row">
                  <Box sx={{ maxWidth: "230px" }}>
                    <Typography variant="h6" sx={{ fontWeight: "500" }} noWrap>
                      {userName}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Box
                    sx={{
                      maxWidth: { xs: "220px", md: "230px" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "500",
                        opacity: "0.8",
                      }}
                      noWrap
                    >
                      {userEmail}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Divider />
        </Box>
        {/* menu when clicked on the userPreview tab */}
        <Menu
          anchorEl={anchorEl}
          open={menuState}
          onClose={() => toggleMenu()}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>
            <Button
              startIcon={<ChatBubbleIcon />}
              onClick={() => FetchConversations(userId)}
            >
              Chat
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              startIcon={<AssignmentIndIcon />}
              onClick={() => profileClickHandler(userId)}
            >
              Profile
            </Button>
          </MenuItem>
        </Menu>
      </>
    </>
  );
};

export default SearchUserPreview;
