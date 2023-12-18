import React, { useState } from "react";
import CSS from "./billing.module.scss";
import { Button, Card, Col, Divider, Row, Typography } from "antd";
import AddCard from "./add-card/add-card";
import CardView from "./add-card/card-view";
import UPICardView from "./upi-card/upi-card-view";
import AddUPI from "./upi-card/add-upi";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const Billing = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Card className="cs-tm-30">
      <Typography.Title level={4}>Billing Settings</Typography.Title>
      <Typography.Title level={5} type="secondary">
        Simplify payments and billing choices. Control your preferences for
        unintrrupted coverage.
      </Typography.Title>
      <Divider className="cs-tm-20" />

      <Row>
        <Col xs={24} className={CSS.bg_sub_heading}>
          <Typography.Title level={5}>Saved Cards</Typography.Title>
        </Col>
      </Row>

      <Row className="cs-tm-14">
        <Col xs={24} className={CSS.card_container}>
          <Row gutter={[20, 20]}>
            <Col xs={6}>
              <CardView />
            </Col>
            <Col xs={6}>
              <AddCard />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={24} className={CSS.bg_sub_heading}>
          <Typography.Title level={5}>Saved VAPS</Typography.Title>
        </Col>
      </Row>

      <Row className="cs-tm-14">
        <Col xs={24} className={CSS.card_container}>
          <Row gutter={[20, 20]}>
            <Col xs={6}>
              <UPICardView />
            </Col>
            <Col xs={6}>
              <AddUPI />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider className="cs-tm-20" />

      <Row gutter={[20, 20]}>
        <Col xs={8}>
          <Typography.Title level={4}>Auto-Renewal</Typography.Title>
          <Typography.Title level={5} type="secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography.Title>
        </Col>

        <Col xs={1}></Col>

        <Col xs={6} className="cs-dis-flex cs-vt-center">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Enable</Radio>
            <Radio value={2}>Disable</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <Divider className="cs-tm-20" />

      <Row gutter={[20, 20]}>
        <Col xs={8}>
          <Typography.Title level={4}>
            Billing Contact Information
          </Typography.Title>
          <Typography.Title level={5} type="secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography.Title>
        </Col>

        <Col xs={1}></Col>

        <Col xs={6} className="cs-dis-flex cs-vt-center">
          <div>
            <Typography.Text className={CSS.email}>
              john@gmail.com
            </Typography.Text>
            <div className={CSS.btn_change_email + " cs-tm-10 "}>
              <span style={{ fontSize: 15 }} className="cs-rm-5">
                +
              </span>
              Add New Email
            </div>
          </div>
        </Col>
      </Row>

      <Divider className="cs-tm-20" />
    </Card>
  );
};

export default Billing;
