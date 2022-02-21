import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import useStateValFunc from "../../../hooks/useStateValFunc";

const AvatarComponent = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [{ userInfo }] = useStateValFunc();

  const handleAnchorElClick = (ev) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ pt: 3, display: "flex", justifyContent: "center", mt: 3 }}>
        <IconButton onClick={(ev) => handleAnchorElClick(ev)}>
          <Avatar sx={{ backgroundColor: "#03a9f4" }}>
            {userInfo && userInfo.name[0].toUpperCase()}
          </Avatar>
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <PersonIcon sx={{ color: "#039be5" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#039be5" }}>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#039be5" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#039be5" }}>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default AvatarComponent;
