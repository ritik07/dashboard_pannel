import React from "react";
import { Col, Row, Typography } from "antd";
import CSS from "./detail.module.scss";

interface ICoachDetail {
  header: string;
}

const CoachSub = ({ header }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <div className={CSS.subscription}>
        <Row>
          <Col xs={24} xl={6}>
            <Typography.Title level={5} className={CSS.sub_title}>
              Per Session
            </Typography.Title>

            <Typography.Title level={4} className={CSS.sub_value}>
              ₹ 1,488
            </Typography.Title>
          </Col>

          <Col xs={24} xl={6}>
            <Typography.Title level={5} className={CSS.sub_title}>
              Duration
            </Typography.Title>

            <Typography.Title level={4} className={CSS.sub_value}>
              1 Month
            </Typography.Title>
          </Col>

          <Col xs={24} xl={6}>
            <Typography.Title level={5} className={CSS.sub_title}>
              Total Sesion
            </Typography.Title>

            <Typography.Title level={4} className={CSS.sub_value}>
              ₹ 15,488
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>

          <Col xs={24} xl={4}>
            <Typography.Title level={5} className={CSS.total}>
              Total
            </Typography.Title>

            <Typography.Title level={2} className={CSS.total_value}>
              ₹ 1,788
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>
        </Row>
      </div>
    </div>
  );
};

export default CoachSub;
