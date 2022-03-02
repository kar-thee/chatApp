import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

const CreateGroupMemberSelect = ({ groupInfo, usersList, handleChange }) => {
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

  return (
    <>
      <Box sx={{ p: 1 }}>
        <InputLabel id="select-members-label"> Select members</InputLabel>
        <FormControl sx={{ width: "100%" }}>
          <Select
            //   labelId="select-members-label"
            id="select-members"
            multiple
            fullWidth
            name="members"
            value={groupInfo.members}
            onChange={(ev) => handleChange(ev)}
            //below is to render chips
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value._id} label={value.name} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {usersList &&
              usersList.map((userObj, ind) => (
                <MenuItem key={ind} value={userObj}>
                  {userObj.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default CreateGroupMemberSelect;
