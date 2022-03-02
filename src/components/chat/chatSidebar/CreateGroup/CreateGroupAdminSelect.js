import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const CreateGroupAdminSelect = ({ groupInfo, handleChange, userInfo }) => {
  return (
    <>
      <Box sx={{ p: 1, my: 3 }}>
        <InputLabel id="admin-label"> Select Admin</InputLabel>
        <FormControl sx={{ width: "100%" }}>
          <Select
            //   labelId="select-members-label"
            id="group-admin"
            name="adminUser"
            fullWidth
            value={groupInfo.adminUser || ""}
            onChange={(ev) => handleChange(ev)}
          >
            {groupInfo.members.length > 0 ? (
              //   this will show current userInfo  ,
              //that person (creator of group) can be admin
              <MenuItem key={userInfo._id} value={userInfo.id}>
                {userInfo.name}
              </MenuItem>
            ) : (
              ""
            )}

            {groupInfo.members.length > 0 &&
              groupInfo.members.map((userObj) => (
                //below will have all selected members for group
                <MenuItem key={userObj._id} value={userObj._id}>
                  {userObj.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default CreateGroupAdminSelect;
