import React from "react";
import { Col, Input, Row, Space, Typography } from "antd";
import {
  UserOutlined,
  PhoneFilled,
} from "@ant-design/icons";
interface ICoachDetail {
  header: string;
  data: any;
  editMode: boolean;
}

const CoachContact = ({ header, data, editMode }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Name *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.manager_name.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.manager_name.is_editable}
                addonBefore={<UserOutlined />}
                size="large"
                defaultValue={data.manager_name.value}
              />
            )}
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Name *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.hr_name.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.hr_name.is_editable}
                addonBefore={<UserOutlined />}
                size="large"
                defaultValue={data.hr_name.value}
              />
            )}
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Contact *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.manager_phone.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.manager_phone.is_editable}
                addonBefore={<PhoneFilled />}
                size="large"
                defaultValue={data.manager_phone.value}
              />
            )}
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Contact *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.manager_phone.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.manager_phone.is_editable}
                addonBefore={<PhoneFilled />}
                size="large"
                defaultValue={data.manager_phone.value}
              />
            )}
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Phone</Typography.Text>
            {!editMode ? (
              <Typography.Text type="secondary">{"optional"}</Typography.Text>
            ) : (
              <Input
                addonBefore={<PhoneFilled />}
                placeholder="Optional"
                size="large"
              />
            )}
          </Space>
        </Col>

        <Col xs={12}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Coach Contact *</Typography.Text>
            {!editMode ? (
              <Typography.Text type="secondary">{"optional"}</Typography.Text>
            ) : (
              <Input
                addonBefore={<PhoneFilled />}
                placeholder="Optional"
                size="large"
              />
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachContact;
