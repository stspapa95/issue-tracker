import React from "react";

import { Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Issue from "./Issue";

import { fetchData } from "../../../utils/utils";
import { IssueProps } from "./model";

function IssuesList({ selectedLabels }: { selectedLabels: string[] }) {
  const queryParams =
    selectedLabels.length > 0
      ? selectedLabels.map((label) => `labels[]=${label}`).join("&")
      : "";

  const { data, isLoading } = useQuery<IssueProps[]>(
    ["issues", queryParams],
    () => fetchData(`/api/issues?${queryParams}`),
  );

  return (
    <Stack spacing={2} width={650}>
      <Typography style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
        {"Issues List"}
      </Typography>

      {isLoading && (
        <Typography style={{ fontSize: 16, color: "#fff" }}>
          Loading...
        </Typography>
      )}
      {data && data.map((issue, idx) => <Issue key={idx} issue={issue} />)}
    </Stack>
  );
}

export default IssuesList;
