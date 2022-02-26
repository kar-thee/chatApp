import { useEffect } from "react";

const SocketClient = ({ socket }) => {
  useEffect(() => {
    // socket.on("connection", () => {
    //   console.log("client connected", socket.id);
    // });
    console.log(socket, "socket");
  }, [socket]);

  return "";
};

export default SocketClient;
