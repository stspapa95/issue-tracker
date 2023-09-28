import React from "react";

import { CircularProgress, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Issue from "./Issue";

import { fetchData } from "../../../utils/utils";
import { IssueProps } from "./model";

function IssuesList() {
  const fetchAll = Promise.all([
    fetchData(`/api/issues`),
    fetchData(`api/labels`),
  ]);
  const { data, isLoading } = useQuery(["issues"], () => fetchAll);

  // @ts-ignore
  const [issues, labels] = data ?? [];

  return (
    <Stack spacing={2}>
      <Typography style={{ fontSize: 28, color: "#fff", fontWeight: "bold" }}>
        {"Issues List"}
      </Typography>

      {isLoading && <CircularProgress sx={{ color: "#fff" }} size={24} />}
      {issues &&
        issues.map((issue: IssueProps, idx: number) => (
          <Issue key={idx} issue={issue} totalLabels={labels} />
        ))}
    </Stack>
  );
}

export default IssuesList;
