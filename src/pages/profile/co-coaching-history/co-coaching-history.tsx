import React from "react";
import { HistoryOutlined, LayoutOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import CSS from "../profile.module.scss";

const CoCoachingHistory = () => {
  return (
    <div>
      <div className="cs-lm-20 cs-tm-20">
        <div className={CSS.table_header}>
          <div>
            <Space direction="horizontal">
              <LayoutOutlined />
              <Typography.Title level={5}>Acme India pvt ltd</Typography.Title>
            </Space>
          </div>

          <Typography.Text type="secondary">
            1234, abc street xyz bangalore, karnataka, 34329
          </Typography.Text>
        </div>
        <Card>
          <Row className="cs-lm-20">
            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Joining Date</Typography.Text>
              </div>
              <Typography.Text>21/12/2011</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Last Day</Typography.Text>
              </div>
              <Typography.Text>Currently working</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">
                  Employment Type
                </Typography.Text>
              </div>
              <Typography.Text>Full Time</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Coaching</Typography.Text>
              </div>
              <Typography.Text>Tier 1</Typography.Text>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default CoCoachingHistory;
