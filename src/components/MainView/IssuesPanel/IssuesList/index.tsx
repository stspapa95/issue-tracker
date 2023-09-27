import React from "react";

import { CircularProgress, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Issue from "./Issue";
import { IssueProps } from "./model";

const fetchData = () => fetch("/api/issues").then((res) => res.json());

function IssuesList() {
  const { data, isLoading } = useQuery<IssueProps[]>(["issues"], fetchData);

  return (
    <Stack spacing={2}>
      <Typography style={{ fontSize: 28, color: "#fff" }}>
        {"Issues List"}
      </Typography>

      {isLoading && (
        <CircularProgress sx={{ color: "#fff" }} />
      )}

      {data && data.map((issue, idx) => <Issue key={idx} issue={issue} />)}
    </Stack>
  );
}

export default IssuesList;
