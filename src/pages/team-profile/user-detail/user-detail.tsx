import React, { useState } from "react";
import {
  ProfileOutlined,
  UserOutlined,
  LayoutOutlined,
  SafetyOutlined,
  EditOutlined,
  CheckOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import CSS from "../team-profile.module.scss";
import { Card, Col, Divider, Input, Row, Space, Typography } from "antd";

const UserDetail = () => {
  const [permanentAddress, setPermanentAddress] = useState(false);
  const [permanentAddressValue, setPermanentAddressValue] = useState("");
  const [coAddress, setCoAddress] = useState(false);
  const [coAddressValue, setCoAddressValue] = useState("");
  return (
    <div>
      <Row>
        <Col xs={24} xl={8}>
          <Card>
            <Row>
              <Col xs={24} xl={24}>
                <div className={CSS.user_icon}>
                  <UserOutlined />
                </div>

                <div className="cs-tm-10">
                  <Typography.Title className="cs-fw-600" level={3}>
                    KSRK sports Pvt Ltd
                  </Typography.Title>
                </div>
                <CheckOutlined className={CSS.verified_tick} />
                <Typography.Text className={CSS.verified}>
                  Profile Verified
                </Typography.Text>
              </Col>

              <Col
                style={{ visibility: "hidden" }}
                xs={24}
                xl={24}
                className="cs-tm-40"
              >
                <div>
                  <Space direction="horizontal">
                    <LayoutOutlined className={CSS.coaching_icon} />
                    <div>
                      <Typography.Text type="secondary">
                        Present Coaching
                      </Typography.Text>
                    </div>
                  </Space>
                  <Typography.Title level={4}>
                    ACME India Pvt. Ltd
                  </Typography.Title>
                </div>
              </Col>
              {true ? (
                <Col xs={24} xl={8} className="cs-tm-40">
                  <div className={CSS.active}>
                    <SafetyOutlined className={CSS.active_icon} />
                    <div className="cs-dis-flex cs-center">Active</div>
                  </div>
                </Col>
              ) : (
                <Col xs={24} xl={8} className="cs-tm-40">
                  <div className={CSS.inactive}>
                    <SafetyOutlined className={CSS.active_icon} />
                    <div className="cs-dis-flex cs-center">In-Active</div>
                  </div>
                </Col>
              )}
            </Row>
          </Card>
        </Col>

        <Col xs={24} xl={16}>
          <Card>
            <Typography.Title level={5}>Personal Detail</Typography.Title>

            <Row className="cs-tm-20 cs-lm-10" gutter={[20, 20]}>
              <Col xs={24} xl={12}>
                <div>
                  <Typography.Text type="secondary">
                    Orgination Name
                  </Typography.Text>
                </div>
                <Typography.Text strong>KSRK sports Pvt Ltd</Typography.Text>

                <Row gutter={[20, 20]} className="cs-tm-10">
                  <Col xs={24} xl={12}>
                    <div>
                      <Typography.Text type="secondary">
                        Industy Type
                      </Typography.Text>
                    </div>
                    <Typography.Text>Sports</Typography.Text>
                  </Col>

                  <Col xs={24} xl={12}>
                    <div>
                      <Typography.Text type="secondary">
                        Team size
                      </Typography.Text>
                    </div>
                    <Typography.Text>12</Typography.Text>
                  </Col>
                </Row>
              </Col>

              <Col xs={24} xl={12}>
                <Space direction="horizontal">
                  <Typography.Text type="secondary">Address</Typography.Text>
                  {!permanentAddress ? (
                    <EditOutlined
                      className={CSS.edit_icon}
                      onClick={() => setPermanentAddress(!permanentAddress)}
                    />
                  ) : (
                    <SaveOutlined
                      onClick={() => {
                        setPermanentAddress(!permanentAddress);
                        console.log(
                          "PUT API CALL HERE WITH",
                          permanentAddressValue
                        );
                      }}
                    />
                  )}
                </Space>
                {!permanentAddress ? (
                  <div>
                    1234, ABC Street, Xyz layout, Bangalore Karnataka 341124
                  </div>
                ) : (
                  <Input.TextArea
                    onChange={(e) => setPermanentAddressValue(e.target.value)}
                    value={permanentAddressValue}
                    defaultValue={
                      "1234, ABC Street, Xyz layout, Bangalore Karnataka 341124"
                    }
                    placeholder="Enter Permanent Address"
                  />
                )}
              </Col>
            </Row>

            <Row>
              <Col xs={24} xl={12}>
                <div className="cs-tm-40">
                  <Typography.Title level={5}>Contact Detail</Typography.Title>
                </div>
                <Row gutter={[20, 20]} className="cs-lm-10 cs-tm-20">
                  <Col xs={24} xl={12}>
                    <div>
                      <Typography.Text type="secondary">
                        Phone Number
                      </Typography.Text>
                    </div>
                    <Typography.Text>+91 9944785221</Typography.Text>
                  </Col>

                  <Col xs={24} xl={12}>
                    <div>
                      <Typography.Text type="secondary">Email</Typography.Text>
                    </div>
                    <Typography.Text>Johnu@email.com</Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetail;
