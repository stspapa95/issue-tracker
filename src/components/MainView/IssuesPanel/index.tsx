import React from "react";
import { Stack } from "@mui/material";
import SearchField from "./SearchField";
import IssuesList from "./IssuesList";

function IssuesPanel() {
  return (
    <Stack spacing={3}>
      <SearchField />
      <IssuesList />
    </Stack>
  );
}

export default IssuesPanel;
