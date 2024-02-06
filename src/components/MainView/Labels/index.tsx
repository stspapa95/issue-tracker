import React from "react";
import { useLabelsData } from "../../../hooks/hooks";

import { Box, Stack, Typography } from "@mui/material";
import { Chip } from "@mui/material";

import { calculateStyles, calculateSelectedStyles } from "./calculateStyles";
import clsx from "clsx";

function Labels({
  selectedLabels,
  handleSelectedLabelIds,
}: {
  selectedLabels: string[];
  handleSelectedLabelIds: (label: string) => void;
}) {
  const { data } = useLabelsData();

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography
        style={{
          fontSize: 20,
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Protest Revolution",
        }}
      >
        {"Labels"}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
        {data &&
          data.map((label: any, idx: number) => (
            <Chip
              sx={{
                "& .MuiChip-label": {
                  fontFamily: "Protest Revolution",
                },
              }}
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
