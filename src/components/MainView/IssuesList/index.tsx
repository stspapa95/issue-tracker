import React from "react";

import { CircularProgress, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Issue from "./Issue";

import { fetchData } from "../../../utils/utils";
import { IssueProps } from "./model";

function IssuesList() {
  const { data, isLoading } = useQuery<IssueProps[]>(["issues"], () =>
    fetchData(`/api/issues`),
  );

  return (
    <Stack spacing={2}>
      <Typography style={{ fontSize: 28, color: "#fff", fontWeight: "bold" }}>
        {"Issues List"}
      </Typography>

      {isLoading && <CircularProgress sx={{ color: "#fff" }} size={24} />}
      {data &&
        data.map((issue, idx) => (
          <Issue key={idx} issue={issue} />
        ))}
    </Stack>
  );
}

export default IssuesList;
