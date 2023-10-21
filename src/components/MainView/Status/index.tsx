import React from "react";
import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { status } from "./constants";

function Status() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack spacing={2}>
      <Typography style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
        {"Status"}
      </Typography>
      <Button
        variant={"outlined"}
        style={{ borderColor: "#fff", color: "#fff" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {"Select a status to filter"}
      </Button>
      <Menu open={open} anchorEl={anchorEl}>
        {status.map((status, idx) => (
          <MenuItem key={idx} onClick={handleClose}>
            {status.label}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}

export default Status;
