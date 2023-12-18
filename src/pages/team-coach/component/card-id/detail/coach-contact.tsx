import React from "react";
import { Col, Row, Space, Typography } from "antd";

interface ICoachDetail {
  header: string;
}

const CoachContact = ({ header }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Name *</Typography.Text>
            <Typography.Text>Rakesh Gupta</Typography.Text>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Name *</Typography.Text>
            <Typography.Text>Rakesh Gupta</Typography.Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Contact *</Typography.Text>
            <Typography.Text>Rakesh@Gupta.com</Typography.Text>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Contact *</Typography.Text>
            <Typography.Text>Rakesh@Gupta.com</Typography.Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Phone</Typography.Text>
            <Typography.Text type="secondary">{"optional"}</Typography.Text>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Contact *</Typography.Text>
            <Typography.Text type="secondary">{"optional"}</Typography.Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachContact;
