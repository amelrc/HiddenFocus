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

import Enrico from "../images/INFL/WEB-Infl-1-Enrico-7435-255kb.jpg";
import Circles from "../images/INFL/WEB-Infl-1.1-Circles-67.1KB.jpg";
import Robert from "../images/INFL/WEB-Infl-2-Robert-Mann-33.3KB.jpg";
import Lawrence from "../images/INFL/WEB-Infl-3-Lawrence-2037-263kb.jpg";
import Laliberte from "../images/INFL/WEB-Infl-4-2037-Laliberte-258kb.jpg";
import Dorothy from "../images/INFL/WEB-Infl-5-8063-Dorothy-371kb.jpg";
import Carvalho from "../images/INFL/WEB-Infl-6-John-Carvalho-284kb.jpg";
import Amel from "../images/INFL/WEB-Infl-7-9517-Amel-274kb.jpg";
import Michelle from "../images/INFL/WEB-Infl-8-7570-Michelle-275kb.jpg";
import Cathy from "../images/INFL/WEB-Infl-9.-676-250kb.jpg";

const Span = styled.span`
  align-self: center;
  border-radius: 50%;
  padding: 6px;
  border: solid 4px red;
`;

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
          <Span />
          <span style={{ height: 2, width: 200, backgroundColor: "red" }} />
        </TimelineSeparator>
        <TimelineContent onClick={handleOpen}>
          <img style={{ marginLeft: -100 }} src={Enrico} width="200px" alt="" />
        </TimelineContent>
        <Modal open={open} onClose={handleClose}>
          <img src={Enrico} width="200px" alt="Enrico" />
        </Modal>
      </TimelineItem>
      {/* /////////////////////// */}
      <TimelineItem style={{ flexDirection: "column" }}>
        <TimelineSeparator style={{ flexDirection: "row" }}>
          <Span />
          <span style={{ height: 2, width: 200, backgroundColor: "red" }} />
        </TimelineSeparator>
        <TimelineContent onClick={handleOpen}>
          <img style={{ marginLeft: -100 }} src={Robert} width="200px" alt="" />
        </TimelineContent>
        <Modal open={open} onClose={handleClose}>
          <img src={Robert} width="200px" alt="Robert" />
        </Modal>
      </TimelineItem>
    </Timeline>
  );
}
