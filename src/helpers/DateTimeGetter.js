import React from "react";

import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

//adding locale to sys and then using ReactTimeAgo which uses javascript time ago npm repo
const DateTimeGetter = ({ createdAt }) => {
  return (
    <>
      <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
    </>
  );
};

export default DateTimeGetter;
