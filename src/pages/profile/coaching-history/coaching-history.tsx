import React from "react";
import { HistoryOutlined, LayoutOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import CSS from "../profile.module.scss";

const CoachingHistory = () => {
  return (
    <div>
      <div className="cs-lm-20 cs-tm-20">
        <div className={CSS.table_header}>
          <div>
            <Space direction="horizontal">
              <LayoutOutlined className={CSS.clr_green} />
              <Typography.Title level={5} className={CSS.clr_green}>
                Coaching Package 1
              </Typography.Title>
            </Space>
          </div>

          <Typography.Title level={5}>Coaching ID: #12345551</Typography.Title>
        </div>
        <Card>
          <Row className="cs-lm-20">
            <Col xl={4}>
              <div>
                <Typography.Text type="secondary">
                  Purchase Date
                </Typography.Text>
              </div>
              <Typography.Text>21/12/2011</Typography.Text>
            </Col>

            <Col xl={4}>
              <div>
                <Typography.Text type="secondary">Last Day</Typography.Text>
              </div>
              <Typography.Text>Currently working</Typography.Text>
            </Col>

            <Col xl={4}>
              <div>
                <Typography.Text type="secondary">Status</Typography.Text>
              </div>
              <Typography.Text>Active</Typography.Text>
            </Col>

            <Col xl={4}>
              <div>
                <Typography.Text type="secondary">Renewed on</Typography.Text>
              </div>
              <Typography.Text>21/12/2011</Typography.Text>
            </Col>

            <Col xl={4}>
              <div>
                <Typography.Text type="secondary">Coaching</Typography.Text>
              </div>
              <Typography.Text>Valid</Typography.Text>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default CoachingHistory;
