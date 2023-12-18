import React from "react";
import { Col, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Fitlers from "./fitlers";
import CoachingCard from "./coaching-card";

const Sider = () => {
  const DUMMY_FILTER = [
    { name: "Declined" },
    { name: "Approved" },
    { name: "2022-2023" },
    { name: "November 23" },
    { name: "Octomber 23" },
  ];
  return (
    <div>
      <Row>
        <Col xs={18}>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search for Coach"
          />
        </Col>
      </Row>

      <Fitlers tags={DUMMY_FILTER} />
      <Row>
        <Col xs={18}>
          <div className="cs-tm-20">
            <CoachingCard />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sider;
