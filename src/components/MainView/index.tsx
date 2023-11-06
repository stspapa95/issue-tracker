import React, { useState } from "react";
import { Stack } from "@mui/material";

import SearchField from "./SearchField";
import IssuesList from "./IssuesList";
import Labels from "./Labels/index";

function MainView() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const handleSelectedLabelIds = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels([...selectedLabels.filter((el) => el !== label)]);
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <Stack direction={"row"} spacing={8}>
      <Stack spacing={3}>
        <SearchField />
        <IssuesList selectedLabels={selectedLabels} />
      </Stack>

      <Stack spacing={6} width={"calc(100% - 650px)"}>
        <Labels
          setSelectedLabels={setSelectedLabels}
          selectedLabels={selectedLabels}
          handleSelectedLabelIds={handleSelectedLabelIds}
        />
      </Stack>
    </Stack>
  );
}

export default MainView;
