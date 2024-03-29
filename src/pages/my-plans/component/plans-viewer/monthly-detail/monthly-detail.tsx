import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import CSS from "./monthly-detail.module.scss";

const MonthlyDetail = () => {
  return (
    <Row>
      <Col xs={24} xl={12}>
        <div>
          <Typography.Title level={4}>Current Coach Detais</Typography.Title>
          <Typography.Text type="secondary">Badminton Coach</Typography.Text>
        </div>

        <div className="cs-tm-20" />

        <div>
          <Typography.Title level={5} type="secondary">
            Your Current Coach
          </Typography.Title>
          <div>
            <Space className="no-gap" direction="horizontal">
              <Typography.Title className="cs-color-primary" level={5}>
                ₹
              </Typography.Title>
              <Typography.Title level={5}>80,000</Typography.Title>
            </Space>
          </div>
        </div>

        <div className="cs-tm-40" />

        <div>
          <Typography.Text type="secondary">Coach Duration</Typography.Text>
          <div>
            <Space direction="horizontal">
              <div>
                <Typography.Title level={5} className="cs-color-primary">
                  <CalendarOutlined />
                </Typography.Title>
              </div>
              <Typography.Title level={5}>3 Months</Typography.Title>
            </Space>
          </div>
        </div>
      </Col>

      <Col xs={24} xl={12}>
        <div>
          <Typography.Title level={5}>Your Monthly Coach</Typography.Title>
          <Typography.Text type="secondary">Badminton Coach</Typography.Text>
        </div>

        <div className="cs-tm-20" />

        <Row>
          <Col xs={24} xl={16}>
            <div className={CSS.plan_per_month_container}>
              <Typography.Text className={CSS.plan_time + " cs-fw-600"}>
                3 Month Coach
              </Typography.Text>

              <div>
                <div className="cs-dis-flex">
                  <div>
                    <Typography.Title
                      level={5}
                      className={CSS.plan_price_rupee + " cs-fw-600"}
                    >
                      <div className={CSS.plan_price_rupee}>₹</div>
                    </Typography.Title>
                  </div>
                  <Typography.Title
                    level={5}
                    className={CSS.plan_price + " cs-fw-600"}
                  >
                    15,800
                  </Typography.Title>
                  <div className="cs-dis-flex cs-ac-end cs-bm-4 cs-lm-4">
                    <Typography.Text className={CSS.plan_price + " cs-fw-600"}>
                      /<span className="cs-lm-2">Month</span>
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="cs-tm-20" />

        <div>
          <Typography.Text type="secondary">Badminton Duration</Typography.Text>
          <div>
            <Space direction="horizontal">
              <div>
                <Typography.Title level={5} className="cs-color-primary">
                  <CalendarOutlined />
                </Typography.Title>
              </div>
              <Typography.Title level={5}>1 Year</Typography.Title>
            </Space>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MonthlyDetail;
