import React, { useState } from "react";
import { Stack } from "@mui/material";

import SearchField from "./SearchField";
import IssuesList from "./IssuesList";
import Labels from "./Labels/index";

function MainView() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  return (
    <Stack direction={"row"} spacing={8}>
      <Stack spacing={3}>
        <SearchField />
        <IssuesList selectedLabels={selectedLabels} />
      </Stack>

      <Labels
        setSelectedLabels={setSelectedLabels}
        selectedLabels={selectedLabels}
      />
    </Stack>
  );
}

export default MainView;
