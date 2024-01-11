import React from "react";
import { Col, DatePicker, Input, Row, Typography } from "antd";
import { IdcardOutlined } from "@ant-design/icons";

const Kyc = () => {
  return (
    <div className="cs-lm-20">
      <Row gutter={[20, 20]}>
        <Col xs={24} xl={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">PAN Card</Typography.Text>
          </div>
          <Input
            addonBefore={<IdcardOutlined />}
            disabled
            size="large"
            defaultValue={"AA2439JKN2"}
          />
        </Col>

        <Col xs={24} xl={12}>
          <div className="cs-bm-4">
            <Typography.Text type="secondary">Aadhar Card</Typography.Text>
          </div>
          <Input
            addonBefore={<IdcardOutlined />}
            disabled
            size="large"
            defaultValue={"1782 1234 123"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Kyc;
