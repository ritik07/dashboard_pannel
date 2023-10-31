import React from "react";
import { Col, DatePicker, Input, Row, Typography } from "antd";
import {
  LayoutOutlined,
  PushpinOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const Current = () => {
  return (
    <div className="cs-lm-20">
      <Row gutter={[20, 20]}>
        <Col xs={11}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">Company Name</Typography.Text>
          </div>
          <Input
            addonBefore={<LayoutOutlined />}
            size="large"
            defaultValue={"Karnataka sports academy"}
          />
          <Row gutter={[20, 20]} className="cs-tm-20">
            <Col xs={12}>
              <div className="cs-bm-4">
                <Typography.Text type="secondary">
                  Employment Type
                </Typography.Text>
              </div>
              <Input
                className="cs-bm-10"
                size="large"
                defaultValue={"HSR BLR 41123"}
              />
            </Col>

            <Col xs={12}>
              <div className="cs-bm-4">
                <Typography.Text type="secondary">
                  Joining Month
                </Typography.Text>
              </div>
              <DatePicker className="cs-bm-10" size="large" />
            </Col>
          </Row>
        </Col>

        <Col xs={2}></Col>

        <Col xs={11}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">Address</Typography.Text>
          </div>

          <Input
            className="cs-bm-15"
            addonBefore={<PushpinOutlined />}
            size="large"
            defaultValue={"Karnataka sports academy"}
          />

          <Input
            className="cs-bm-15"
            size="large"
            defaultValue={"HSR BLR 41123"}
          />

          <Input className="cs-bm-10" size="large" defaultValue={"Karnataka"} />
        </Col>
      </Row>
    </div>
  );
};

export default Current;
