import React from "react";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import { timeAgo } from "../../../../../utils/utils";
import { IssueProps } from "../model";
import { Status } from "../constants";

type IssueComponentProps = {
  issue: IssueProps;
};

function Issue({ issue }: IssueComponentProps) {
  const {
    title,
    number,
    comments,
    labels,
    status,
    createdDate,
    createdBy,
    assignee,
  } = issue;

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      py={2}
      px={2}
      style={{ borderRadius: 4, border: `1px solid rgba(255,255,255,.25)` }}
      gap={3}
    >
      <InfoOutlinedIcon
        style={{
          color:
            status === Status.STATUS_DONE || status === Status.STATUS_CANCELLED
              ? "red"
              : "green",
        }}
      />

      <Stack spacing={1}>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Typography
            style={{ fontSize: 18, color: "yellow", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          {labels.map((label, index) => (
            <Chip
              key={index}
              label={label}
              variant={"outlined"}
              sx={{ color: "#fff" }}
            />
          ))}
        </Box>
        <Typography style={{ fontSize: 12, color: "#aaa" }}>
          {`#${number} opened ${timeAgo(createdDate)} by ${createdBy}`}
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        ml={"auto"}
        justifyContent={"center"}
      >
        {assignee && (
          <Avatar
            alt={`assignee-avatar`}
            src={""}
            sx={{ width: 28, height: 28, marginRight: 1 }}
          />
        )}
        <ChatBubbleOutlineOutlinedIcon
          style={{ color: "#aaa", fontSize: 20 }}
        />
        {comments.length > 0 && (
          <Typography style={{ fontSize: 14, color: "#aaa" }}>
            {comments.length}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Issue;
