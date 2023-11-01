import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import {
  LayoutOutlined,
  PushpinOutlined,
  CalendarOutlined,
  UserOutlined,
  PhoneFilled,
} from "@ant-design/icons";

const MangerDetail = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <div>
            <Typography.Title level={4}>Badminton Coach</Typography.Title>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-40">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Manager</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={5} className="cs-color-primary">
                <UserOutlined />
              </Typography.Title>
              <Typography.Title level={5}>Rahul Mishra</Typography.Title>
            </Space>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">
              Second Coach Manager
            </Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={5} className="cs-color-primary">
                <UserOutlined />
              </Typography.Title>
              <Typography.Title level={5}>Pooja G</Typography.Title>
            </Space>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Manager Contact</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={5} className="cs-color-primary">
                @
              </Typography.Title>
              <Typography.Title level={5}>Mishra@sports.com</Typography.Title>
            </Space>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Contact</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={5} className="cs-color-primary">
                @
              </Typography.Title>
              <Typography.Title level={5}>poojag@sports.com</Typography.Title>
            </Space>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Manager Phone</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={5} className="cs-color-primary">
                <PhoneFilled />
              </Typography.Title>
              <Typography.Title level={5}>+91-998837442</Typography.Title>
            </Space>
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Contact</Typography.Text>
            <Space direction="horizontal">
              <Typography.Title level={5} className="cs-color-primary">
                <PhoneFilled />
              </Typography.Title>
              <Typography.Title type="secondary" level={5}>(optional)</Typography.Title>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default MangerDetail;
