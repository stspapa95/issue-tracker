import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/utils";

function Labels() {
  const { data: labels } = useQuery(["labels"], () => fetchData(`/api/labels`));

  return (
    <Stack direction={"column"} spacing={1}>
      <Typography style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
        {"Labels"}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
        {labels &&
          labels.map((label: any, idx: number) => (
            <Chip
              key={idx}
              label={label.name}
              variant={"outlined"}
              onClick={() => {}}
              sx={{
                color: `${label.color}`,
                border: `1px solid ${label.color}`,
              }}
            />
          ))}
      </Box>
    </Stack>
  );
}

export default Labels;
