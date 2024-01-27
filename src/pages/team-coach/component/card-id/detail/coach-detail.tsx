import React from "react";
import { Col, Row, Space, Typography } from "antd";

interface ICoachDetail {
  header: string;
}

const CoachDetail = ({ header }: ICoachDetail) => {
  return (
    <div>
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row className="cs-tm-20">
        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Full Name *</Typography.Text>
            <Typography.Text>Rajesh Kumar</Typography.Text>
          </Space>
        </Col>

        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Select Gender *</Typography.Text>
            <Typography.Text>Male</Typography.Text>
          </Space>
        </Col>

        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Date of Birth *</Typography.Text>
            <Typography.Text>12-03-91 *</Typography.Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Phone Number *</Typography.Text>
            <Typography.Text>9988775566</Typography.Text>
          </Space>
        </Col>

        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Email *</Typography.Text>
            <Typography.Text>Raskesh@gmail.com</Typography.Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">PAN number *</Typography.Text>
            <Typography.Text>BHJ332HJK</Typography.Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachDetail;
