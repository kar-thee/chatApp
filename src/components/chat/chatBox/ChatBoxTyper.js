import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import SendIcon from "@mui/icons-material/Send";

import useDispatchFunc from "../../../hooks/useDispatchFunc";

const ChatBoxTyper = ({ sendTypedMsg, chatBoxId }) => {
  const [typedMsg, setTypedMsg] = useState("");
  const [dispatch] = useDispatchFunc();

  const submitHandler = () => {
    if (typedMsg !== "" || typedMsg.length > 0) {
      sendTypedMsg(typedMsg);
      setTypedMsg("");
    }
  };

  useEffect(() => {
    dispatch({
      type: "chatNotificationsRemove",
      payLoad: { chatId: chatBoxId },
    });
  }, [chatBoxId, dispatch]);

  return (
    <>
      {/* <Box>
        <TextareaAutosize minRows={2} maxRows={4} style={{ width: "70%" }} />
      </Box> */}
      <Container disableGutters>
        <Box
          sx={{
            "& .MuiTextField-root": {
              width: "98%",
            },
            ml: 1,
            py: 1,
            px: 0,
          }}
        >
          <TextField
            id="chatTyper"
            name="chatTyper"
            value={typedMsg}
            onChange={(ev) => setTypedMsg(ev.target.value)}
            multiline
            minRows={2}
            maxRows={5}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => submitHandler()}>
                    <SendIcon sx={{ color: "#0277bd" }} />
                  </IconButton>
                  {/* <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button> */}
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default ChatBoxTyper;
