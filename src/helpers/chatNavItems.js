import MessageIcon from "@mui/icons-material/Message";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WifiIcon from "@mui/icons-material/Wifi";

const chatNavItems = () => {
  const itemList = [
    {
      title: "Chats",
      tooltipTitle: "Chat Messages",
      iconComponent: <MessageIcon sx={{ color: "#039be5" }} />,
      href: "chats",
    },
    {
      title: "Users",
      tooltipTitle: "Users Online",
      iconComponent: <WifiIcon sx={{ color: "#039be5" }} />,
      href: "trial1",
    },
    {
      title: "Group",
      tooltipTitle: "Create GroupChat",
      iconComponent: <GroupAddIcon sx={{ color: "#039be5" }} />,
      href: "trial1",
    },
    {
      title: "Search",
      tooltipTitle: "Search Users",
      iconComponent: <PersonSearchIcon sx={{ color: "#039be5" }} />,
      href: "trial2",
    },
  ];
  return itemList;
};

export default chatNavItems;
