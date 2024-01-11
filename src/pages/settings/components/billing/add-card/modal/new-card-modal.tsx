import React, { useState } from "react";
import { Button, Col, Divider, Input, Modal, Row, Typography } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import {
  LayoutOutlined,
  PushpinOutlined,
  CalendarOutlined,
  CreditCardFilled,
  LockFilled,
  UserOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import CSS from "./new-card.module.scss";

interface IModalView {
  setIsModalOpen: Function;
}

const ModalNewCard = ({ setIsModalOpen }: IModalView) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title=""
        footer={false}
        open={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className={CSS.title}>
            <Typography.Title level={4}>
              Add Credit / Debit Card
            </Typography.Title>
          </div>
          <Divider className={CSS.divider} />
        </div>
        <div>
          <div className={CSS.title}>
            <Typography.Text type="secondary">
              Securely save your credit card for convinent payment
            </Typography.Text>
          </div>
          <div className={CSS.form_container}>
            <Row gutter={[20, 20]}>
              <Col xs={24} xl={24}>
                <div className="cs-bm-4">
                  <Typography.Title level={5} type="secondary">
                    Card Number *
                  </Typography.Title>
                </div>
                <Input
                  placeholder="Card number"
                  addonBefore={<CreditCardFilled />}
                  size="large"
                />
              </Col>

              <Col xs={24} xl={12}>
                <div className="cs-bm-4">
                  <Typography.Title level={5} type="secondary">
                    Valid Through *
                  </Typography.Title>
                </div>
                <Input
                  placeholder="MM / YY"
                  addonBefore={<CalendarOutlined />}
                  size="large"
                />
              </Col>

              <Col xs={24} xl={12}>
                <div className="cs-bm-4">
                  <Typography.Title level={5} type="secondary">
                    CVV *
                  </Typography.Title>
                </div>
                <Input
                  placeholder="CVV Number"
                  addonBefore={<LockFilled />}
                  size="large"
                />
              </Col>

              <Col xs={24} xl={24}>
                <div className="cs-bm-4">
                  <Typography.Title level={5} type="secondary">
                    Name on the Card
                  </Typography.Title>
                </div>
                <Input
                  placeholder="Name on the Card"
                  addonBefore={<UserOutlined />}
                  size="large"
                />
              </Col>
            </Row>

            <Row className="cs-tm-40">
              <Col xs={24}>
                <div className={CSS.add_card_container} onClick={handleOk}>
                  <div className={CSS.add_card_txt}>+ Add Card</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalNewCard;
