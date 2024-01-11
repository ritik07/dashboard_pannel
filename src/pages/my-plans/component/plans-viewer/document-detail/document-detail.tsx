import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import { IdcardOutlined, PaperClipOutlined } from "@ant-design/icons";

const DocumentDetail = () => {
  return (
    <div>
      <Row>
        <Col xs={24} xl={12}>
          <div>
            <Typography.Title level={4}>
              Badinton Coach Documents
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-40">
        <Col xs={24} xl={7}>
          <Space direction="horizontal">
            <Typography.Title level={5} className="cs-color-primary">
              <PaperClipOutlined />
            </Typography.Title>
            <Typography.Title level={5}>Document_12</Typography.Title>
          </Space>
        </Col>

        <Col xs={24} xl={7}>
          <Space direction="horizontal">
            <Typography.Title level={5} className="cs-color-primary">
              <PaperClipOutlined />
            </Typography.Title>
            <Typography.Title level={5}>Document_12</Typography.Title>
          </Space>
        </Col>

        <Col xs={24} xl={7}>
          <Space direction="horizontal">
            <Typography.Title level={5} className="cs-color-primary">
              <PaperClipOutlined />
            </Typography.Title>
            <Typography.Title level={5}>Document_12</Typography.Title>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default DocumentDetail;
