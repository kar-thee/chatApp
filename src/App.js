import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppProvider from "./context/AppProvider";
import Protected from "./helpers/Protected";
import ChatLayout from "./pages/chat/ChatLayout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ChatMessages from "./components/chat/chatSidebar/Messages/ChatMessages";
import UserProfile from "./components/chat/profiles/UserProfile";
import UsersOnline from "./components/chat/chatSidebar/OnlineUsers/UsersOnline";
import SearchUsersView from "./components/chat/chatSidebar/SearchUsers/SearchUsersView";
import CreateGroupView from "./components/chat/chatSidebar/CreateGroup/CreateGroupView";
import GroupProfile from "./components/chat/profiles/GroupProfile";

const App = () => {
  return (
    <>
      <AppProvider>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route
            path="/chatApp"
            element={
              <Protected redirect={<SigninPage />}>
                <ChatLayout />
              </Protected>
            }
          >
            <Route
              path=""
              element={
                <Protected redirect={<SigninPage />}>
                  <ChatMessages />
                </Protected>
              }
            />

            <Route
              path="creategroup"
              element={
                <Protected redirect={<SigninPage />}>
                  <CreateGroupView />
                </Protected>
              }
            />
            <Route
              path="searchusers"
              element={
                <Protected redirect={<SigninPage />}>
                  <SearchUsersView />
                </Protected>
              }
            />
            <Route
              path="userslive"
              element={
                <Protected redirect={<SigninPage />}>
                  <UsersOnline />
                </Protected>
              }
            />
            <Route
              path="chats"
              element={
                <Protected redirect={<SigninPage />}>
                  <ChatMessages />
                </Protected>
              }
            />
            <Route
              path="profile/:userId"
              element={
                <Protected redirect={<SigninPage />}>
                  <UserProfile />
                </Protected>
              }
            />
            <Route
              path="groupprofile/:groupId"
              element={
                <Protected redirect={<SigninPage />}>
                  <GroupProfile />
                </Protected>
              }
            />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppProvider>
    </>
  );
};

export default App;
