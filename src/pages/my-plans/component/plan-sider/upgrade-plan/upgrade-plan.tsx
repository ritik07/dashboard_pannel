import React from "react";
import { Col, Row, Tag, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CSS from "./upgrade-plan.module.scss";

const UpgradePlan = () => {
  return (
    <div className={CSS.upgrade_plan_container + " cs-tm-20"}>
      <div className="cs-dis-flex cs-jc-end">
        <Tag color="#ccccfa">
          <Typography.Text className={CSS.tag_text_color}>New</Typography.Text>
        </Tag>
      </div>
      <div>
        <div className="cs-dis-flex">
          <InfoCircleOutlined className={CSS.info_icon + " cs-rm-10"} />
          <Typography.Title level={5} className="cs-dis-flex cs-vt-center">
            Upgrade for Badminton
          </Typography.Title>
        </div>

        <div className="cs-tm-20">
          <Typography.Text>
            Enhance your badminton today for unmatched coaching and enduring
            peace of mind. Upgrade now and safeguard your future with
            confidence! Upgrade Seamless Coach Access
          </Typography.Text>
        </div>

        <Row className="cs-dis-flex cs-hrz-center cs-tm-20">
          <Col xs={14}>
            <div className={CSS.upgrade_btn + " cs-dis-flex cs-hrz-center"}>
              <Typography.Title level={5} className="cs-clr-fff">
                Upgrade
              </Typography.Title>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UpgradePlan;
