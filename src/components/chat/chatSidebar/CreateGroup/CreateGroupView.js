import { Box } from "@mui/material";
import React, { useEffect } from "react";

import useDispatchFunc from "../../../../hooks/useDispatchFunc";

const CreateGroupView = () => {
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
  }, [dispatch]);

  return (
    <>
      <Box sx={{ maxHeight: "95vh", overflowY: "scroll" }}>group</Box>
    </>
  );
};

export default CreateGroupView;
