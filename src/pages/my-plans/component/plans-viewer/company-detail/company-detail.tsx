import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import {
  LayoutOutlined,
  PushpinOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const CompanyDetail = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <div>
            <Typography.Title level={2}>
              Current Badminton Coach
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-40">
        <Col xl={12}>
          <div>
            <Typography.Text type="secondary">Company Name</Typography.Text>
            <div>
              <Space direction="horizontal">
                <div>
                  <Typography.Title level={4} className="cs-color-primary">
                    <LayoutOutlined />
                  </Typography.Title>
                </div>
                <Typography.Title level={4}>
                  Karnataka Sports Academy
                </Typography.Title>
              </Space>
            </div>
          </div>

          <Col xs={12} className="cs-tm-40">
            <Row gutter={[20, 20]}>
              <Col xs={12}>
                <div>
                  <Space direction="vertical">
                    <Typography.Text type="secondary">
                      Employment Type
                    </Typography.Text>
                    <Typography.Title level={5}>Full time</Typography.Title>
                  </Space>
                </div>
              </Col>

              <Col xs={12}>
                <div>
                  <Space direction="vertical">
                    <Typography.Text type="secondary">
                      Joining Month
                    </Typography.Text>
                    <Space direction="horizontal">
                      <Typography.Title level={3} className="cs-color-primary">
                        <CalendarOutlined />
                      </Typography.Title>
                      <Typography.Title level={5}>24/08/2024</Typography.Title>
                    </Space>
                  </Space>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>

        <Col xl={12}>
          <div>
            <Typography.Text type="secondary">Address</Typography.Text>
            <div>
              <Row>
                <Col xl={1}>
                  <Typography.Title level={4} className="cs-color-primary">
                    <PushpinOutlined />
                  </Typography.Title>
                </Col>
                <Col xl={16}>
                  <Typography.Title level={4}>
                    123, abc street, 5th block HSR layout Bangalore - 56001,
                    Karnataka, India
                  </Typography.Title>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyDetail;
