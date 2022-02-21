import React from "react";

import { Box, CircularProgress } from "@mui/material";

const MiniLoader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: "50%",
        }}
      >
        <CircularProgress sx={{ color: "#5d4037" }} size={30} />
      </Box>
    </>
  );
};

export default MiniLoader;
