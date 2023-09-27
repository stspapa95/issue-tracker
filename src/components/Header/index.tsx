import React from "react";
import { Typography } from "@mui/material";

function Header() {
  return (
    <Typography
      style={{ fontSize: 48, color: "#fff", textAlign: "center" }}
      my={4.5}
    >
      {"Issues Tracker"}
    </Typography>
  );
}

export default Header;
