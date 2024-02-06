import React from "react";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Typography
      style={{
        fontSize: 48,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Protest Revolution",
      }}
      my={4.5}
    >
      {"Issues Tracker"}
    </Typography>
  );
}

export default Header;
