import React from "react";
import { Col, Row, Space, Typography } from "antd";

interface ICoachDetail {
  header: string;
}

const CoachDetail3 = ({ header }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row className="cs-tm-20">
        <Col xs={24}>
          <Space direction="vertical">
            <Typography.Text type="secondary">
              Coach per session
            </Typography.Text>
            <Typography.Text>1,200/-</Typography.Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachDetail3;
