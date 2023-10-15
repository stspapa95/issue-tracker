import React, { Dispatch, SetStateAction } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Chip } from "@mui/material";

import { useLabelsData } from "../../../hooks/hooks";

import {calculateStyles, calculateSelectedStyles} from "./calculateStyles";
import clsx from "clsx";

function Labels({
  setSelectedLabels,
  selectedLabels,
}: {
  selectedLabels: string[];
  setSelectedLabels: Dispatch<SetStateAction<string[]>>;
}) {
  const { data } = useLabelsData();

  const handleSelectedLabelIds = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels([...selectedLabels.filter((el) => el !== label)]);
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
        {"Labels"}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
        {data &&
          data.map((label: any, idx: number) => (
            <Chip
              className={clsx(
                calculateStyles(label.id),
                selectedLabels.includes(label.id) &&
                  calculateSelectedStyles(label.id),
              )}
              key={idx}
              label={label.id}
              onClick={() => handleSelectedLabelIds(label.id)}
            />
          ))}
      </Box>
    </Stack>
  );
}

export default Labels;
