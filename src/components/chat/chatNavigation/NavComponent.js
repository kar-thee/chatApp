import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavComponent = ({ title, iconComponent, href }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          my: 3,
          py: 2,
          cursor: "pointer",
          mx: "auto",
          ":hover": { backgroundColor: "#80d8ff" },
        }}
        onClick={() => navigate(href)}
      >
        <Tooltip title={title}>
          <IconButton>{iconComponent}</IconButton>
        </Tooltip>
        <Typography
          sx={{ display: { xs: "none", lg: "unset" }, color: "#01579b" }}
        >
          {title}
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#0277bd",
          display: { xs: "none", sm: "unset" },
        }}
      />
    </>
  );
};

export default NavComponent;
