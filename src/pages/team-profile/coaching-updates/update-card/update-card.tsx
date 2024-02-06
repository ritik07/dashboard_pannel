import React from "react";
import { Row, Col, Card, Typography, Space } from "antd";
import CSS from "./update-card.module.scss";
import { UserOutlined } from "@ant-design/icons";

type Props = {};

function UpdateCard({}: Props) {
  return (
    <Row gutter={[3, 3]} className="cs-rm-30">
      <Col xl={6} className={`${CSS.update_card_container} ${CSS.flex_center}`}>
        <div>
          <UserOutlined className={CSS.icon_green} />
        </div>
      </Col>

      <Col xl={18}>
        <div className={CSS.update_card_container}>
          <Typography.Title level={5}>Rohan Sharma</Typography.Title>

          <Row className="cs-tm-10">
            <Col xl={12}>
              <Typography.Text type="secondary">Joining date</Typography.Text>
            </Col>
            <Col xl={12}>
              <Typography.Text type="secondary">Coach type</Typography.Text>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Typography.Text>12/11/23</Typography.Text>
            </Col>
            <Col xl={12}>
              <Typography.Text>Full Time</Typography.Text>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default UpdateCard;
