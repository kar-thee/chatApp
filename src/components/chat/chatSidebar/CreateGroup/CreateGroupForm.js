import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const CreateGroupForm = ({ usersList, createGroupFunc }) => {
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
    createGroupFunc(groupInfo);

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

  console.log(groupInfo, "groupInfo");

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChangeForMembers = (event) => {
    const {
      target: { value },
    } = event;
    // On autofill we get a stringified value.
    setGroupInfo((prev) => ({
      ...prev,
      ["members"]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 3, px: 1 },
        }}
      >
        {/* group name */}
        <TextField
          variant="filled"
          id="groupName"
          name="groupName"
          label="Group name"
          value={groupInfo.groupName}
          onChange={(ev) => handleChange(ev)}
          fullWidth
        />

        {/* group members select */}
        <Box sx={{ p: 1 }}>
          <FormControl sx={{ my: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              fullWidth
              value={groupInfo.members}
              onChange={(ev) => handleChangeForMembers(ev)}
              //   input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              //   renderValue={(selected) => (
              //     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              //       {selected.map((value) => (
              //         <Chip key={value} label={value} />
              //       ))}
              //     </Box>
              //   )}
              //   MenuProps={MenuProps}
            >
              {usersList &&
                usersList.map((userObj) => (
                  <MenuItem key={userObj._id} value={userObj._id}>
                    {userObj.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        {/* group admin select */}

        {/* submit button to create group */}
        <Box sx={{ p: 1 }}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => validateForm()}
          >
            Create Group
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateGroupForm;
