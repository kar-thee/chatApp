import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ChatTitle from "../ChatTitle";

import SearchUserApiCall from "../../../../apis/profile/SearchUserApiCall";

import useStateValFunc from "../../../../hooks/useStateValFunc";
import useDispatchFunc from "../../../../hooks/useDispatchFunc";

import SearchUserPreview from "./SearchUserPreview";
import GetAllUsersApiCall from "../../../../apis/profile/GetAllUsersApiCall";

const SearchUsersView = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchFoundArray, setSearchFoundArray] = useState("");
  const [emptyVal, setEmptyVal] = useState(false);

  const [{ token, loadingState }] = useStateValFunc();
  const [dispatch] = useDispatchFunc();

  useEffect(() => {
    dispatch({ type: "sidebarViewOn" });
  }, [dispatch]);

  const performSearchOperation = async () => {
    dispatch({ type: "loadingStart" });
    const response = await SearchUserApiCall(searchValue, token);
    dispatch({ type: "loadingStop" });
    if (response.data.type === "success") {
      setSearchFoundArray(response.data.usersFound);
      setEmptyVal(false);
    } else {
      setSearchFoundArray("");
      setEmptyVal(true);
      await dispatch({ type: "sidebarViewOn" });
    }
  };

  const getAllUsers = async () => {
    dispatch({ type: "loadingStart" });
    const response = await GetAllUsersApiCall(token);
    dispatch({ type: "loadingStop" });
    if (response.data.type === "success") {
      setSearchFoundArray(response.data.allUsers);
      setEmptyVal(false);
    } else {
      setSearchFoundArray("");
      setEmptyVal(true);
      await dispatch({ type: "sidebarViewOn" });
    }
  };

  return (
    <>
      <Box sx={{ maxHeight: "95vh", overflowY: "scroll" }}>
        {/* this is title */}
        <>
          <ChatTitle title="Search Users" />
        </>

        {/* this is search field and button */}
        <Box sx={{ p: 1, py: 2 }}>
          <TextField
            id="outlined-search"
            label="Search Users"
            type="search"
            variant="outlined"
            fullWidth
            value={searchValue}
            onChange={(ev) => setSearchValue(ev.target.value)}
            InputProps={{
              endAdornment: (
                <>
                  {loadingState ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    ""
                  )}
                </>
              ),
            }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Button
              endIcon={<PersonSearchIcon />}
              variant="contained"
              sx={{ my: 1 }}
              onClick={() => performSearchOperation()}
            >
              Search
            </Button>
            <Button
              endIcon={<PersonSearchIcon />}
              variant="contained"
              sx={{ my: 1 }}
              onClick={() => getAllUsers()}
            >
              All users
            </Button>
          </Stack>
        </Box>

        {/* here the list */}

        {searchFoundArray &&
          searchFoundArray.map((userObj) => (
            <SearchUserPreview searchFoundArray={userObj} key={userObj._id} />
          ))}

        {/* here display if no result found */}
        {emptyVal ? (
          <>
            <h1>No Search results</h1>
          </>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default SearchUsersView;
