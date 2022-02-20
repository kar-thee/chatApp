import MessageIcon from "@mui/icons-material/Message";

const chatNavItems = () => {
  const itemList = [
    {
      title: "Chats",
      iconComponent: <MessageIcon sx={{ color: "#039be5" }} />,
      href: "chats",
    },
    {
      title: "Chats",
      iconComponent: <MessageIcon sx={{ color: "#039be5" }} />,
      href: "trial2",
    },
    {
      title: "Chats",
      iconComponent: <MessageIcon sx={{ color: "#039be5" }} />,
    },
    {
      title: "Chats",
      iconComponent: <MessageIcon sx={{ color: "#039be5" }} />,
    },
  ];
  return itemList;
};

export default chatNavItems;
