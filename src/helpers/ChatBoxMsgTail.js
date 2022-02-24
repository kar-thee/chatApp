import React from "react";

const ChatBoxMsgTail = ({ type }) => {
  const classVal = {
    position: "absolute",
    top: 0,
    zIndex: 100,
    display: "block",
    width: "8px",
    height: "13px",
  };

  if (type === "out") {
    return (
      <>
        <div style={{ position: "relative", transform: `rotate(270deg)` }}>
          <span dataicon="tail-out">
            <svg viewBox="0 0 8 13" width="8" height="13">
              <path
                opacity=".13"
                d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
              ></path>
              <path
                fill="#80d8ff"
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              ></path>
            </svg>
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ marginTop: "3.5px" }}>
          <span dataicon="tail-in">
            <svg viewBox="0 0 8 13" width="8" height="13">
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="#80d8ff"
                d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </span>
        </div>
      </>
    );
  }
};

export default ChatBoxMsgTail;
