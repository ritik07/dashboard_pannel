import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import { IdcardOutlined } from "@ant-design/icons";

const KycDetail = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <div>
            <Typography.Title level={2}>KYC</Typography.Title>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-40">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">PAN Number</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={3} className="cs-color-primary">
                <IdcardOutlined />
              </Typography.Title>
              <Typography.Title level={5}>AA2439JKN2</Typography.Title>
            </Space>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Aadhar Number</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={3} className="cs-color-primary">
                <IdcardOutlined />
              </Typography.Title>
              <Typography.Title level={5}>1782 1234 123</Typography.Title>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default KycDetail;
