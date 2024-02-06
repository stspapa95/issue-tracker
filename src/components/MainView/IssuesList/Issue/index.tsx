import React from "react";

import { timeAgo } from "../../../../utils/utils";
import { useUserData } from "../../../../hooks/hooks";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Label from "./Label";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

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
    status,
    labels,
    createdDate,
    createdBy,
    assignee,
  } = issue;

  //Manual Parallel Queries
  const assigneeData = useUserData(`${assignee}`);
  const createdByData = useUserData(`${createdBy}`);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      py={2}
      px={2}
      style={{
        borderRadius: 4,
        border: `1px solid rgba(255,255,255,.25)`,
      }}
      gap={3}
      width={"100%"}
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
            style={{
              fontSize: 18,
              color: "yellow",
              fontWeight: "bold",
              fontFamily: "Protest Revolution",
            }}
          >
            {title}
          </Typography>

          {labels.map((label, index) => (
            <Label label={label} key={index} />
          ))}
        </Box>

        <Typography
          style={{
            fontSize: 12,
            color: "#aaa",
            fontFamily: "Protest Revolution",
          }}
        >
          {`#${number} opened ${timeAgo(createdDate)} by ${
            createdByData.isSuccess ? createdByData.data?.name : ""
          }`}
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        ml={"auto"}
        justifyContent={"center"}
      >
        {assigneeData.data?.profilePictureUrl && (
          <Avatar
            alt={`Issue assigned to ${assigneeData.data.name}`}
            src={assigneeData.data?.profilePictureUrl}
            sx={{ width: 28, height: 28, marginRight: 1 }}
          />
        )}

        <ChatBubbleOutlineOutlinedIcon
          style={{ color: "#aaa", fontSize: 20 }}
        />

        {comments.length > 0 && (
          <Typography
            style={{
              fontSize: 14,
              color: "#aaa",
              fontFamily: "Protest Revolution",
            }}
          >
            {comments.length}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Issue;
