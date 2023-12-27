import React from "react";
import { Col, Input, Row } from "antd";
import SiderCard from "./sider-card";

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
          <SiderCard />
        </Col>
      </Row>
    </div>
  );
};

export default Sider;
