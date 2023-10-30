import React from "react";
import { Col, Input, Row, Typography, Form, Select, Divider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CSS from "./compute-plan.module.scss";
import DurationCard from "./duration-card/duration-card";

/**
 *
 * 1hr 10min
 */

const ComputePlan = () => {
  const selectAfter = (
    <Select defaultValue="3 Month">
      <Select.Option value="3 Month">3 Month</Select.Option>
      <Select.Option value="12 Month">.12 Month</Select.Option>
    </Select>
  );
  return (
    <div className="cs-lm-20">
      <Row gutter={[20, 20]}>
        <Col xs={11}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">
              Your Current Coach
            </Typography.Text>
          </div>
          <Input addonBefore="₹" size="large" defaultValue={"97,400"} />
          <div className="cs-dis-flex cs-tm-5">
            <InfoCircleOutlined />
            <div className="cs-lm-5">
              <Typography.Text type="secondary">
                Additional action required, if coach changed.
              </Typography.Text>
            </div>
          </div>
        </Col>

        <Col xs={2}></Col>

        <Col xs={11}>
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

        <Col xs={11}>
          <div className="cs-bm-4">
            <Typography.Text>Coach Duration</Typography.Text>
          </div>
          <Input
            addonAfter={selectAfter}
            placeholder="Select Benifit duration"
          />
        </Col>

        <Col xs={2}></Col>

        <Col xs={10}>
          <div className="cs-bm-4">
            <Typography.Text>Badinton Duration</Typography.Text>
          </div>
          <DurationCard
            data={[
              { duration: "1 Year" },
              { duration: "2 Years" },
              { duration: "3 Years" },
            ]}
            active={1}
            onSelect={() => {}}
          />
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default ComputePlan;
