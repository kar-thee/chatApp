// import React from "react";

// const ChatMessageArchived = ({ msg, userInfo }) => {
//   return (
//     <Stack
//       key={msg._id}
//       direction="row"
//       justifyContent={
//         msg.sender._id === userInfo.id ? "flex-End" : "flex-Start"
//       }
//       alignItems={msg.sender._id === userInfo.id ? "flex-End" : "flex-Start"}
//       sx={{ my: 3, px: { xs: 1, md: 3 } }}
//     >
//       <Box sx={{ order: `${msg.sender._id === userInfo.id ? 1 : 0}` }}>
//         <Avatar
//           sx={{
//             backgroundColor: `${
//               msg.sender._id === userInfo.id ? "#03a9f4" : "#0277bd"
//             }`,
//             // color: `${
//             //   msg.sender._id === userInfo.id ? "#039be5" : "#03a9f4"
//             // }`,
//           }}
//         >
//           {msg.sender._id === userInfo.id
//             ? userInfo.name[0].toUpperCase()
//             : msg.sender.name[0].toUpperCase()}
//         </Avatar>
//       </Box>

//       <Box
//         sx={{
//           padding: "6px 7px 8px 9px",
//           // backgroundColor: "#039be5",
//           // backgroundColor: "0091ea",
//           backgroundColor: "#80d8ff",
//           maxWidth: { xs: "80%", md: "70%" },
//           borderRadius: "10px",

//           mt: msg.sender._id !== userInfo.id ? 2 : "",
//           mb: msg.sender._id === userInfo.id ? 2 : "",
//           ml: msg.sender._id !== userInfo.id ? 1 : "",
//           mr: msg.sender._id === userInfo.id ? 1 : "",
//         }}
//       >
//         <Stack
//           alignItems={
//             msg.sender._id === userInfo.id ? "flex-End" : "flex-Start"
//           }
//         >
//           <Typography variant="subtitle1">{msg.content}</Typography>
//           <Typography sx={{ opacity: 0.7, mt: 1 }} variant="caption">
//             <DateTimeGetter createdAt={msg.createdAt} />
//           </Typography>
//         </Stack>
//       </Box>
//     </Stack>
//   );
// };

// export default ChatMessageArchived;
