import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import { IdcardOutlined, PaperClipOutlined } from "@ant-design/icons";

const DocumentDetail = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <div>
            <Typography.Title level={2}>
              Badinton Coach Documents
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-40">
        <Col xs={7}>
          <Space direction="horizontal">
            <Typography.Title level={3} className="cs-color-primary">
              <PaperClipOutlined />
            </Typography.Title>
            <Typography.Title level={5}>Document_12</Typography.Title>
          </Space>
        </Col>

        <Col xs={7}>
          <Space direction="horizontal">
            <Typography.Title level={3} className="cs-color-primary">
              <PaperClipOutlined />
            </Typography.Title>
            <Typography.Title level={5}>Document_12</Typography.Title>
          </Space>
        </Col>
        
        <Col xs={7}>
          <Space direction="horizontal">
            <Typography.Title level={3} className="cs-color-primary">
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
