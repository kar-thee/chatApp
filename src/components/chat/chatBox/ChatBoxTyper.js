import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import SendIcon from "@mui/icons-material/Send";

const ChatBoxTyper = () => {
  const [typedMsg, setTypedMsg] = useState("");

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
                  <IconButton>
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
