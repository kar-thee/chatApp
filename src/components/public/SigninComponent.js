import {
  Button,
  Container,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";

import React from "react";
import { Link } from "react-router-dom";

const SigninComponent = ({
  state,
  errorState,
  handleChange,
  pwdHidden,
  togglePwdVisibility,
  submitHandler,
}) => {
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          border: "1px solid grey",
          py: 5,
          mt: { xs: "20%", md: "10%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              "& .MuiFilledInput-root": { backgroundColor: "#fff" },
              "& .MuiFilledInput-root:hover": { backgroundColor: "#fff" },
            }}
          >
            <FormControl
              sx={{ my: 1 }}
              variant="filled"
              fullWidth
              error={errorState.email}
            >
              <InputLabel htmlFor="name">Email</InputLabel>
              <FilledInput
                id="email"
                name="email"
                type="text"
                value={state.email}
                onChange={(ev) => handleChange(ev)}
                aria-describedby="emailHelper"
              />
              <FormHelperText id="emailHelper">
                {errorState.email && "type valid email"}
              </FormHelperText>
            </FormControl>

            <FormControl
              sx={{ my: 1 }}
              variant="filled"
              fullWidth
              error={errorState.password}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                id="password"
                name="password"
                type={pwdHidden ? "text" : "password"}
                value={state.password}
                onChange={(ev) => handleChange(ev)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePwdVisibility}
                      onMouseDown={togglePwdVisibility}
                      edge="end"
                    >
                      {pwdHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="passwordHelper"
              />
              <FormHelperText id="passwordHelper">
                {errorState.password && "eg: Password1@"}
              </FormHelperText>
            </FormControl>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => submitHandler()}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xs" sx={{ border: "1px solid grey", py: 2, mt: 5 }}>
        <Typography
          variant="button"
          component={Link}
          to="/signup"
          sx={{ textDecoration: "none", color: "#03a9f4" }}
        >
          New User? Signup here.
        </Typography>
      </Container>
    </>
  );
};

export default SigninComponent;
