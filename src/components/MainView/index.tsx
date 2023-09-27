import React from "react";
import { Stack } from "@mui/material";
import IssuesPanel from "./IssuesPanel";

function MainView() {
  return (
    <Stack direction={"row"} spacing={8}>
      <IssuesPanel />
    </Stack>
  );
}

export default MainView;
