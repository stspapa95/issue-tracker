import React from "react";
import { Box, Chip } from "@mui/material";

import { useLabelsData } from "../../../../../hooks/hooks";
import { LabelsProps } from "../../model";

function Label({ label }: { label: string }) {
  const { data, isLoading } = useLabelsData();

  const foundLabel = data?.find((el: LabelsProps) => el.id === label);
  if (!foundLabel) return null;

  return (
    <Box>
      {isLoading ? (
        <></>
      ) : (
        <Chip
          label={label}
          sx={{
            border: `1px solid ${foundLabel.color}`,
            color: foundLabel.color,
          }}
        />
      )}
    </Box>
  );
}

export default Label;
