import React from "react";
import { Col, Row, Space, Typography } from "antd";

interface ICoachDetail {
  header: string;
}

const CoachDetail2 = ({ header }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row className="cs-tm-20">
        <Col xs={24}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Company Name</Typography.Text>
            <Typography.Text>Karnataka sports company Pvt Ltd.</Typography.Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Employment Type</Typography.Text>
            <Typography.Text>Full Time</Typography.Text>
          </Space>
        </Col>

        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Joining Month</Typography.Text>
            <Typography.Text>12-12-2023</Typography.Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachDetail2;
