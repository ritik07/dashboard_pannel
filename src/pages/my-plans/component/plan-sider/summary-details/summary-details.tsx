import React from "react";
import { Typography, Tag, Row, Col } from "antd";
import SummaryItem from "./summary-item";

const SummaryDetails = () => {
  const DUMMY_SUMMARY_DATA = [
    {
      title: "Purchase Date",
      value: "20/07/2022",
      id: "1",
    },
    {
      title: "Total Coach",
      value: "3,122/m",
      id: "2",
    },
    {
      title: "Purchase Date",
      value: "20/07/2022",
      id: "3",
    },
    {
      title: "Purchase Date",
      value: "20/07/2022",
      id: "4",
    },
    {
      title: "Total Coach",
      value: "3,122/m",
      id: "5",
    },
    {
      title: "Purchase Date",
      value: "20/07/2022",
      id: "6",
    },
  ];

  return (
    <div>
      <div className="cs-tm-30 cs-bm-20">
        <Typography.Title level={3}>Summary</Typography.Title>
      </div>
      {DUMMY_SUMMARY_DATA.map((item) => {
        return (
          <SummaryItem key={item.id} title={item.title} value={item.value} />
        );
      })}

      <div className="cs-tm-30 cs-bm-20">
        <Typography.Title type="secondary" level={3}>
          Exclusions and limitations
        </Typography.Title>
        <Typography.Title type="secondary" level={5}>
          What our coaches does not cover
        </Typography.Title>

        <div className="cs-tm-10">
          <Row>
            <Col xs={24}>
              <Tag className="cs-tm-10">Injury Helpline</Tag>
            </Col>
            <Col xs={24}>
              <Tag className="cs-tm-10">Personal Phone Calls</Tag>
            </Col>
            <Col xs={24}>
              <Tag className="cs-tm-10">Fraud</Tag>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetails;
