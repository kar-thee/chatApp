import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import AppProvider from "./context/AppProvider";
import Protected from "./helpers/Protected";
import ChatLayout from "./pages/chat/ChatLayout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Trial from "./components/chat/chatSidebar/Trial1";
import Trial2 from "./components/chat/chatSidebar/Trial2";
import ChatMessages from "./components/chat/chatSidebar/Messages/ChatMessages";
import UserProfile from "./components/chat/profiles/UserProfile";

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
              path="trial1"
              element={
                <Protected redirect={<SigninPage />}>
                  <Trial />
                </Protected>
              }
            />
            <Route
              path="trial2"
              element={
                <Protected redirect={<SigninPage />}>
                  <Trial2 />
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
