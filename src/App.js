import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Loader from "./helpers/Loader";
import Protected from "./helpers/Protected";
import ChatLayout from "./pages/chat/ChatLayout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            path="/chat"
            element={
              <Protected redirect={<SigninPage />}>
                <ChatLayout />
              </Protected>
            }
          />

          <Route path="*" element={<HomePage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <>
          <Loader />
        </>
      </AppProvider>
    </>
  );
};

export default App;
