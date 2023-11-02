import React from "react";
import {
  ProfileOutlined,
  UserOutlined,
  LayoutOutlined,
  SafetyOutlined,
  EditOutlined,
} from "@ant-design/icons";
import CSS from "../profile.module.scss";
import { Card, Col, Divider, Row, Space, Typography } from "antd";

const UserDetail = () => {
  return (
    <div>
      <Row>
        <Col xs={8}>
          <Card>
            <Row>
              <Col xs={24}>
                <div className={CSS.user_icon}>
                  <UserOutlined />
                </div>

                <div className="cs-tm-10">
                  <Typography.Title className="cs-fw-600" level={3}>
                    John Hu
                  </Typography.Title>
                </div>
                <Typography.Text className={CSS.verified}>
                  Profile Verified
                </Typography.Text>
              </Col>

              <Col xs={24} className="cs-tm-40">
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

              <Col xs={8} className="cs-tm-40">
                <div className={CSS.active}>
                  <SafetyOutlined className={CSS.active_icon} />
                  <div className="cs-dis-flex cs-center">Active</div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={16}>
          <Card>
            <Typography.Title level={5}>Personal Detail</Typography.Title>

            <Row className="cs-tm-20 cs-lm-10" gutter={[20, 20]}>
              <Col xs={8}>
                <div>
                  <Typography.Text type="secondary">Full Name</Typography.Text>
                </div>
                <Typography.Text>John Hiu</Typography.Text>

                <Row gutter={[20, 20]} className="cs-tm-10">
                  <Col xs={10}>
                    <div>
                      <Typography.Text type="secondary">Gender</Typography.Text>
                    </div>
                    <Typography.Text>Male</Typography.Text>
                  </Col>

                  <Col xs={12}>
                    <div>
                      <Typography.Text type="secondary">
                        Date of Birth
                      </Typography.Text>
                    </div>
                    <Typography.Text>12/02/1993</Typography.Text>
                  </Col>
                </Row>
              </Col>

              <Col xs={8}>
                <Space direction="horizontal">
                  <Typography.Text type="secondary">
                    Permanent Address
                  </Typography.Text>
                  <EditOutlined />
                </Space>
                <div>
                  1234, ABC Street, Xyz layout, Bangalore Karnataka 341124
                </div>
              </Col>

              <Col xs={8}>
                <Space direction="horizontal">
                  <Typography.Text type="secondary">
                    Communicaion Address
                  </Typography.Text>
                  <EditOutlined />
                </Space>
                <div>
                  1234, ABC Street, Xyz layout, Bangalore Karnataka 341124
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="cs-tm-40">
                  <Typography.Title level={5}>Contact Detail</Typography.Title>
                </div>
                <Row gutter={[20, 20]} className="cs-lm-10 cs-tm-20">
                  <Col xs={12}>
                    <div>
                      <Typography.Text type="secondary">
                        Phone Number
                      </Typography.Text>
                    </div>
                    <Typography.Text>+91 9944785221</Typography.Text>
                  </Col>

                  <Col xs={12}>
                    <div>
                      <Typography.Text type="secondary">Email</Typography.Text>
                    </div>
                    <Typography.Text>Johnu@email.com</Typography.Text>
                  </Col>
                </Row>
              </Col>

              <Col xs={12}>
                <div className="cs-tm-40">
                  <Typography.Title level={5}>KYC</Typography.Title>
                </div>

                <Row gutter={[20, 20]} className="cs-lm-10 cs-tm-20">
                  <Col xs={12}>
                    <div>
                      <Typography.Text type="secondary">
                        PAN Number
                      </Typography.Text>
                    </div>
                    <Typography.Text>*****KNJJ98</Typography.Text>
                  </Col>

                  <Col xs={12}>
                    <div>
                      <Typography.Text type="secondary">Aadhar</Typography.Text>
                    </div>
                    <Typography.Text>*****KNJJ98</Typography.Text>
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
