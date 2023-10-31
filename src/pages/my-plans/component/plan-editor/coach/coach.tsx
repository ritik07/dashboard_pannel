import React from "react";
import { Col, DatePicker, Input, Row, Typography } from "antd";
import {
  LayoutOutlined,
  PushpinOutlined,
  CalendarOutlined,
  UserOutlined,
  PhoneFilled,
} from "@ant-design/icons";

const Coach = () => {
  return (
    <div className="cs-lm-20">
      <Row gutter={[20, 20]}>
        <Col xs={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">Coach Manager</Typography.Text>
          </div>
          <Input
            addonBefore={<UserOutlined />}
            size="large"
            defaultValue={"Pooja G"}
          />
        </Col>

        <Col xs={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">
              {" "}
              Second Coach Manager
            </Typography.Text>
          </div>
          <Input
            addonBefore={<UserOutlined />}
            size="large"
            defaultValue={"Rahul Mishra"}
          />
        </Col>

        <Col xs={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary"> Manager Contact</Typography.Text>
          </div>
          <Input
            addonBefore={"@"}
            size="large"
            defaultValue={"Mishra@sports.com"}
          />
        </Col>

        <Col xs={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary"> Manager Contact</Typography.Text>
          </div>
          <Input
            addonBefore={"@"}
            size="large"
            defaultValue={"Mishra@sports.com"}
          />
        </Col>

        <Col xs={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary"> Manager Phone</Typography.Text>
          </div>
          <Input
            type="number"
            addonBefore={<PhoneFilled />}
            size="large"
            defaultValue={998837442}
          />
        </Col>

        <Col xs={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary"> Manager Phone</Typography.Text>
          </div>
          <Input
            type="number"
            addonBefore={<PhoneFilled />}
            size="large"
            placeholder="(Optional)"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Coach;
