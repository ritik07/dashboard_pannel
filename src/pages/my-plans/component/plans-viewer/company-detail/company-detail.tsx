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
        <Col xs={24} sm={24} xl={12}>
          <div>
            <Typography.Title level={4}>
              Current Badminton Coach
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-40">
        <Col xl={12} xs={24}>
          <div>
            <Typography.Text type="secondary">Company Name</Typography.Text>
            <div>
              <Space direction="horizontal">
                <div>
                  <Typography.Title level={5} className="cs-color-primary">
                    <LayoutOutlined />
                  </Typography.Title>
                </div>
                <Typography.Title level={5}>
                  Karnataka Sports Academy
                </Typography.Title>
              </Space>
            </div>
          </div>

          <Col xs={24} xl={12} className="cs-tm-40">
            <Row gutter={[20, 20]}>
              <Col xs={24} xl={18}>
                <div>
                  <Space direction="vertical">
                    <Typography.Text type="secondary">
                      Employment Type
                    </Typography.Text>
                    <Typography.Title level={5}>Full time</Typography.Title>
                  </Space>
                </div>
              </Col>

              <Col xs={24} xl={6}>
                <div>
                  <Space direction="vertical">
                    <Typography.Text type="secondary">
                      Joining Month
                    </Typography.Text>
                    <Space direction="horizontal">
                      <Typography.Title level={5} className="cs-color-primary">
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

        <Col xl={12} xs={24}>
          <div>
            <Typography.Text type="secondary">Address</Typography.Text>
            <div>
              <Row gutter={[20, 20]}>
                <Col xs={1}>
                  <Typography.Title level={5} className="cs-color-primary">
                    <PushpinOutlined />
                  </Typography.Title>
                </Col>
                <Col xs={16}>
                  <Typography.Title level={5}>
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
