import { Col, Row, Typography } from "antd";
import React from "react";

const Header = () => {
  return (
    <Row>
      <Col xs={6}>
        <Typography.Text type="secondary">Coach</Typography.Text>
      </Col>

      <Col xs={6}>
        <Typography.Text type="secondary">ID</Typography.Text>
      </Col>

      <Col xs={6}>
        <Typography.Text type="secondary">Date of Request</Typography.Text>
      </Col>

      <Col xs={6}>
        <Typography.Text type="secondary">Status</Typography.Text>
      </Col>
    </Row>
  );
};

export default Header;
