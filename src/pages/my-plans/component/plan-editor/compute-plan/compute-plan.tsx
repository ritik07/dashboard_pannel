import { Col, Input, Row, Typography, Form } from "antd";
import CSS from "./compute-plan.module.scss";
import React from "react";

/**
 *
 * 1hr 10min
 */

const ComputePlan = () => {
  return (
    <div className="cs-lm-20">
      <Row>
        <Col xs={10}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">
              Your Current Coach
            </Typography.Text>
          </div>
          <Input addonBefore="₹" size="large" defaultValue={"97,400"} />
        </Col>

        <Col xs={2}></Col>

        <Col xs={12}>
          <Row>
            <Col xs={20}>
              <div className={CSS.plan_per_month_container}>
                <div className="cs-dis-flex">
                  <div className="cs-tm-6">
                    <Typography.Title
                      level={4}
                      className={CSS.plan_price + " cs-fw-600"}
                    >
                      ₹
                    </Typography.Title>
                  </div>
                  <Typography.Title className={CSS.plan_price + " cs-fw-600"}>
                    15,800
                  </Typography.Title>
                  <div className="cs-dis-flex cs-ac-end cs-bm-6">
                    <Typography.Text className={CSS.plan_price + " cs-fw-600"}>
                      /<span className="cs-lm-2">Month</span>
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ComputePlan;
