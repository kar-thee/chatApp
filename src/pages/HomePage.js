import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ChatTitle from "../components/chat/chatSidebar/ChatTitle";
import useAuth from "../hooks/useAuth";

import chatImg from "../assets/chatPng.gif";
const HomePage = () => {
  const [checkAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // if auth available navigate to chatApp
    checkAuth() && navigate("/chatApp");
  }, [checkAuth, navigate]);

  return (
    <>
      <Box sx={{ maxHeight: "100vh", overflow: "hidden" }}>
        {/* this is title */}
        <Box sx={{ backgroundColor: "#80d8ff", p: 2 }}>
          <ChatTitle title="Chat App" />
        </Box>
        <Grid container sx={{ py: { xs: 2, md: 3 } }}>
          <Grid item xs={12} md={6} sx={{ px: 1 }}>
            <Box>
              <Typography variant="h4" align="center" sx={{ color: "#29b6f6" }}>
                Welcome to chat App
              </Typography>
            </Box>
            <Box sx={{ my: 1 }}>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: "#29b6f6" }}
              >
                ChatApp using Socket.io with MERN
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                py: { xs: 2, md: 5 },
                mt: 5,
                textAlign: "center",
                color: "#03a9f4",
                ":hover": {
                  background: "#29b6f6",
                  color: "#b3e5fc",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="button"
                component={Link}
                to="/signin"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Already Registered? signIn here
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                py: { xs: 2, md: 5 },
                mt: 5,
                textAlign: "center",
                color: "#03a9f4",
                ":hover": {
                  background: "#29b6f6",
                  color: "#b3e5fc",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="button"
                component={Link}
                to="/signup"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                New User? Signup here.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={chatImg} alt="chat" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
