import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/utils";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { BeatLoader } from "react-spinners";

import Issue from "./Issue";

import { IssueProps } from "./model";

function IssuesList({ selectedLabels }: { selectedLabels: string[] }) {
  const labelsParams =
    selectedLabels.length > 0
      ? selectedLabels.map((label) => `labels[]=${label}`).join("&")
      : "";

  const { data, isLoading } = useQuery<IssueProps[]>(
    ["issues", { selectedLabels }],
    () => fetchData(`/api/issues?${labelsParams}`),
    { refetchOnWindowFocus: false },
  );

  return (
    <Stack spacing={2} width={650}>
      <Box display={"flex"} alignItems={"center"} columnGap={2}>
        <Typography style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          {"Issues List"}
        </Typography>
        {isLoading && <BeatLoader color={"#FFF"} size={10} />}
      </Box>

      {data && data.map((issue, idx) => <Issue key={idx} issue={issue} />)}
    </Stack>
  );
}

export default IssuesList;
