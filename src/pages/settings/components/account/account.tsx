import React, { useState } from "react";
import { Button, Card, Col, Divider, Row, Typography } from "antd";
import CSS from "./account.module.scss";
import ModalView from "./modal/deactivate-modal";

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Card className="cs-tm-30">
        <Typography.Title level={4} style={{ fontWeight: 700 }}>
          Account Settings
        </Typography.Title>
        <Typography.Title level={5} type="secondary">
          Tailor your preference, update your personal information. Your
          account, your way
        </Typography.Title>
        <Divider className="cs-tm-20" />

        <Row gutter={[20, 20]}>
          <Col xs={24} xl={8}>
            <Typography.Title level={4} style={{ fontWeight: 700 }}>
              Account Type
            </Typography.Title>
            <Typography.Title level={5} type="secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium, deserunt in. Nihil perferendis quaerat cum nemo
              voluptate suscipit aliquid
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>

          <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
            <Button className={CSS.btn_prmry}>Individual</Button>
            <Button disabled className="cs-lm-20">
              Origisation
            </Button>
          </Col>
        </Row>
        <Divider className="cs-tm-40" />
        <Row className="cs-tm-40" gutter={[20, 20]}>
          <Col xs={24} xl={8}>
            <Typography.Title level={4} style={{ fontWeight: 700 }}>
              Email
            </Typography.Title>
            <Typography.Title level={5} type="secondary">
              Primary Email Address <br />
              (Updating currently disabled)
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>

          <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
            <div>
              <Typography.Title
                level={5}
                color="#8383f5"
                className={CSS.clr_email}
              >
                xyz@gmail.com
              </Typography.Title>

              <div className={CSS.btn_disabled + " cs-tm-10 "}>
                Change email
              </div>
            </div>
          </Col>
        </Row>
        <Divider className="cs-tm-40" />
        <Row className="cs-tm-40" gutter={[20, 20]}>
          <Col xs={24} xl={8}>
            <Typography.Title level={4} style={{ fontWeight: 700 }}>
              Phone Number
            </Typography.Title>
            <Typography.Title level={5} type="secondary">
              Primary Phone Number <br />
              (Updating currently disabled)
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>

          <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
            <div>
              <Typography.Title
                level={5}
                color="#8383f5"
                className={CSS.clr_email}
              >
                +91-9988776655
              </Typography.Title>

              <div className={CSS.btn_disabled + " cs-tm-10 "}>
                Update phone number
              </div>
            </div>
          </Col>
        </Row>
        <Divider className="cs-tm-40" />
        <Row className="cs-tm-40" gutter={[20, 20]}>
          <Col xs={24} xl={8}>
            <Typography.Title level={4} style={{ fontWeight: 700 }}>
              Origisation Logo
            </Typography.Title>
            <Typography.Title level={5} type="secondary">
              Update your origisation logo
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>

          <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
            <div>
              <Typography.Title
                level={5}
                color="#8383f5"
                className={CSS.clr_email}
              >
                Logo component here
              </Typography.Title>
            </div>
          </Col>
        </Row>
        <Divider className="cs-tm-40" />
        <Row className="cs-tm-40" gutter={[20, 20]}>
          <Col xs={24} xl={8}>
            <Typography.Title level={4} className={CSS.deactivate}>
              Deactivate Account
            </Typography.Title>
            <Typography.Title level={5} type="secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus perferendis repellat commodi natus eligendi quibusdam
              architecto numquam
            </Typography.Title>
          </Col>

          <Col xs={24} xl={1}></Col>

          <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
            <div>
              <div
                className={CSS.deactive_btn + " cs-tm-10 "}
                onClick={() => setIsModalOpen(true)}
              >
                Deactivate Account
              </div>
            </div>
          </Col>
        </Row>
        <Divider className="cs-tm-40" />
      </Card>
      {isModalOpen ? <ModalView setIsModalOpen={setIsModalOpen} /> : null}
    </div>
  );
};

export default Account;
