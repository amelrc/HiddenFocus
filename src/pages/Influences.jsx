import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import I1 from "../images/INFL/WEB-Infl-1-Enrico-7435-255kb.jpg";

export default function AlternateTimeline() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Timeline
      align="alternate"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TimelineItem style={{ flexDirection: "column" }}>
        <TimelineSeparator style={{ flexDirection: "row" }}>
          <span
            style={{
              alignSelf: "center",
              borderRadius: "50%",
              padding: 6,
              border: "solid 4px red",
            }}
          />
          <span style={{ height: 2, width: 200, backgroundColor: "red" }} />
        </TimelineSeparator>
        <TimelineContent onClick={handleOpen}>
          <img style={{ marginLeft: -100 }} src={I1} width="200px" alt="" />
        </TimelineContent>
        <Modal open={open} onClose={handleClose}>
          <img src={I1} width="200px" alt="" />
        </Modal>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
