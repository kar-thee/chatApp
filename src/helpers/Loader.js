import React from "react";

import { Backdrop, CircularProgress } from "@mui/material";
import useStateValFunc from "../hooks/useStateValFunc";

const Loader = () => {
  const [{ loadingState }] = useStateValFunc();
  return (
    <>
      <Backdrop
        sx={{
          color: "#d7ccc8",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loadingState}
      >
        <CircularProgress sx={{ color: "#5d4037" }} size={50} />
      </Backdrop>
    </>
  );
};

export default Loader;
