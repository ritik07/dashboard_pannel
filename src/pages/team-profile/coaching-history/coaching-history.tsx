import React from "react";
import { HistoryOutlined, LayoutOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import CSS from "../team-profile.module.scss";

const CoachingHistory = () => {
  return (
    <div>
      <div className="cs-lm-20 cs-tm-20">
        <div className={CSS.table_header}>
          <div>
            <Space direction="horizontal">
              <LayoutOutlined className={CSS.clr_green} />
              <Typography.Title level={5} className={CSS.clr_green}>
                Coaching Subscription
              </Typography.Title>
            </Space>
          </div>

          <Typography.Title level={5}>Coaching ID: #12345551</Typography.Title>
        </div>
        <Card>
          <Row className="cs-lm-20">
            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">
                  Purchase Date
                </Typography.Text>
              </div>
              <Typography.Text strong>21/12/2011</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Last Day</Typography.Text>
              </div>
              <Typography.Text strong>Currently working</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Status</Typography.Text>
              </div>
              <Typography.Text strong>Active</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Renewed on</Typography.Text>
              </div>
              <Typography.Text strong>21/12/2011</Typography.Text>
            </Col>

            <Col xs={24} xl={4}>
              <div>
                <Typography.Text type="secondary">Subcription</Typography.Text>
              </div>
              <Typography.Text className={CSS.clr_success} strong>Valid</Typography.Text>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default CoachingHistory;
