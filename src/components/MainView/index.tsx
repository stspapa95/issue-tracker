import React from "react";
import { Stack } from "@mui/material";

import SearchField from "./SearchField";
import IssuesList from "./IssuesList";
import Labels from "./Labels";

function MainView() {
  return (
    <Stack direction={"row"} spacing={8}>
      <Stack spacing={3}>
        <SearchField />
        <IssuesList />
      </Stack>

      <Labels />
    </Stack>
  );
}

export default MainView;
