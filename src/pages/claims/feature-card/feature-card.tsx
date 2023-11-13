import React from "react";
import { Col, Row, Space, Typography } from "antd";
import { ApiFilled } from "@ant-design/icons";
import CSS from "./feature-card.module.scss";

const FeatureCard = () => {
  return (
    <div className={CSS.container}>
      <Row>
        <Col xs={24}>
          <Space direction="horizontal">
            <ApiFilled className={CSS.icon} />
            <Typography.Title level={4} className="cs-clr-fff">
              Fusce tempor
            </Typography.Title>
          </Space>

          <div className="cs-tm-30">
            <Typography.Title className={CSS.title} level={5}>
              Sapien
            </Typography.Title>
          </div>
          <div className="cs-dis-flex cs-jc-sb">
            <Typography.Title className="cs-clr-fff" level={3}>
              Metus
            </Typography.Title>

            <Typography.Title className="cs-clr-fff" level={4}>
              Libero
            </Typography.Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeatureCard;
