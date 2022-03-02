import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CreateGroupMemberSelect from "./CreateGroupMemberSelect";
import CreateGroupAdminSelect from "./CreateGroupAdminSelect";

const CreateGroupForm = ({ usersList, createGroupFunc, userInfo }) => {
  const groupInfoInitialState = {
    members: [],
    adminUser: "",
    groupName: "",
  };
  const [groupInfo, setGroupInfo] = useState(groupInfoInitialState);

  const handleChange = (ev) => {
    setGroupInfo((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const submitForm = () => {
    //here send state to parent component
    //to create group chat
    const membersArray = groupInfo.members;
    //here using map func -> we get only id from each obj
    let memberIdArray = membersArray.map((memberObj) => memberObj._id);

    //updating the obj to send to server
    createGroupFunc({ ...groupInfo, members: memberIdArray });

    //set to initial value
    setGroupInfo(groupInfoInitialState);
  };

  const validateForm = () => {
    const { members, adminUser, groupName } = groupInfo;
    //validate all info
    if (!members || members.length < 1 || !adminUser || !groupName) {
      return;
    }

    if (members && members.length > 0 && adminUser && groupName) {
      //if validation success - call submit Form
      submitForm();
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 3 },
        }}
      >
        {/* group name */}
        <Box sx={{ p: 1 }}>
          <TextField
            id="groupName"
            name="groupName"
            placeholder="Group name"
            value={groupInfo.groupName}
            onChange={(ev) => handleChange(ev)}
            fullWidth
          />
        </Box>

        {/* group members select */}
        <CreateGroupMemberSelect
          groupInfo={groupInfo}
          handleChange={handleChange}
          usersList={usersList}
        />

        {/* group admin select only after members selected first*/}
        <CreateGroupAdminSelect
          groupInfo={groupInfo}
          handleChange={handleChange}
          userInfo={userInfo}
        />

        {/* submit button to create group */}
        <Box sx={{ p: 1, my: 3 }}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => validateForm()}
            startIcon={<GroupAddIcon />}
          >
            Create Group
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateGroupForm;
