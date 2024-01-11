import React, { useState } from "react";
import CSS from "./billing.module.scss";
import { Button, Card, Col, Divider, Input, Row, Typography } from "antd";
import AddCard from "./add-card/add-card";
import CardView from "./add-card/card-view";
import UPICardView from "./upi-card/upi-card-view";
import AddUPI from "./upi-card/add-upi";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import ModalNewCard from "./add-card/modal/new-card-modal";
import UpiIdModal from "./add-card/modal/upi-id-modal";

const Billing = () => {
  const [value, setValue] = useState(1);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState<boolean>(false);
  const [isUpiModalOpen, setIsUpiModalOpen] = useState<boolean>(false);
  const [emailAddMode, setEmailAddMode] = useState(false);
  const [secondaryEmail, setSecondaryEmail] = useState("");

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleAddEmail = () => {
    setEmailAddMode(!emailAddMode);
  };

  let debounceTimer: NodeJS.Timeout | null = null;

  const debounceApiCall = (email: string) => {
    // Clear the previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new timer to call the API after 500 milliseconds (adjust as needed)
    debounceTimer = setTimeout(() => {
      // Call your API with the latest secondaryEmail value
      callApi(email);
    }, 500);
  };

  const callApi = (email: string) => {
    // Replace this with your actual API call logic
    console.log("Calling API with email:", email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSecondaryEmail(value);

    // Use the latest value of secondaryEmail when calling debounceApiCall
    debounceApiCall(value);
  };

  const removeSecondaryEmail = () => {
    setSecondaryEmail("");
    setEmailAddMode(false);
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
          <Typography.Title level={5} style={{ fontWeight: 700 }}>
            Saved Cards
          </Typography.Title>
        </Col>
      </Row>

      <Row className="cs-tm-14">
        <Col xs={24} className={CSS.card_container}>
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={6}>
              <CardView />
            </Col>
            <Col xs={24} xl={6}>
              <AddCard setIsModalOpen={setIsAddCardModalOpen} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={24} className={CSS.bg_sub_heading}>
          <Typography.Title level={5} style={{ fontWeight: 700 }}>
            Saved VAPS
          </Typography.Title>
        </Col>
      </Row>

      <Row className="cs-tm-14">
        <Col xs={24} className={CSS.card_container}>
          <Row gutter={[20, 20]}>
            <Col xs={24} xl={6}>
              <UPICardView />
            </Col>
            <Col xs={24} xl={6} onClick={() => setIsUpiModalOpen(true)}>
              <AddUPI />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider className="cs-tm-20" />

      <Row gutter={[20, 20]}>
        <Col xs={24} xl={8}>
          <Typography.Title level={5} style={{ fontWeight: 700 }}>
            Auto-Renewal
          </Typography.Title>
          <Typography.Text type="secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography.Text>
        </Col>

        <Col xs={24} xl={1}></Col>

        <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Enable</Radio>
            <Radio value={2}>Disable</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <Divider className="cs-tm-20" />

      <Row gutter={[20, 20]}>
        <Col xs={24} xl={8}>
          <Typography.Title level={5} style={{ fontWeight: 700 }}>
            Billing Contact Information
          </Typography.Title>
          <Typography.Text type="secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography.Text>
        </Col>

        <Col xs={24} xl={1}></Col>

        <Col xs={24} xl={6} className="cs-dis-flex cs-vt-center">
          <div>
            <div className="cs-dis-flex">
              <div className="cs-rm-10">
                <Typography.Text className={CSS.email}>
                  john@gmail.com
                </Typography.Text>
              </div>
              {!emailAddMode ? (
                <Typography.Text className={CSS.email}>
                  {secondaryEmail}
                </Typography.Text>
              ) : null}
            </div>

            {emailAddMode ? (
              <Input
                placeholder="Enter Secondary Email ID"
                value={secondaryEmail}
                onChange={handleInputChange}
              />
            ) : null}

            {secondaryEmail && !emailAddMode ? (
              <div className={CSS.btn_change_email + " cs-tm-10 "}>
                <div
                  className="cs-hrz-center cs-dis-flex"
                  onClick={removeSecondaryEmail}
                >
                  Remove secondary email
                </div>
              </div>
            ) : (
              <div
                className={CSS.btn_change_email + " cs-tm-10 "}
                onClick={() => handleAddEmail()}
              >
                {emailAddMode ? (
                  <div className="cs-hrz-center cs-dis-flex">Add</div>
                ) : (
                  <div>
                    <span style={{ fontSize: 15 }} className="cs-rm-5">
                      +
                    </span>
                    Add New Email
                  </div>
                )}
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Divider className="cs-tm-20" />
      {isAddCardModalOpen ? (
        <ModalNewCard setIsModalOpen={setIsAddCardModalOpen} />
      ) : null}
      {isUpiModalOpen ? (
        <UpiIdModal setIsModalOpen={setIsUpiModalOpen} />
      ) : null}
    </Card>
  );
};

export default Billing;
