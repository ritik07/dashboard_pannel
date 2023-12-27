import React from "react";
import { Col, DatePicker, Input, Row, Select, Space, Typography } from "antd";
import {
  EditOutlined,
  DeleteFilled,
  UserOutlined,
  PhoneFilled,
  IdcardFilled,
} from "@ant-design/icons";
import moment from "moment";
import dayjs from "dayjs";

interface ICoachDetail {
  header: string;
  setEditMode: Function;
  data: any;
  editMode: boolean;
}

const CoachDetail = ({
  header,
  setEditMode,
  data,
  editMode = false,
}: ICoachDetail) => {
  return (
    <div>
      <Row>
        <Col xs={24}>
          <div className="cs-dis-flex cs-jc-sb">
            <Typography.Title level={4}>{header}</Typography.Title>

            <div className="cs-dis-flex">
              <div className="cs-rm-20">
                <DeleteFilled style={{ fontSize: "28px" }} />
              </div>
              <div onClick={() => setEditMode(true)}>
                <EditOutlined style={{ fontSize: "28px" }} />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Full Name *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.full_name.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.full_name.is_editable}
                addonBefore={<UserOutlined />}
                size="large"
                defaultValue={data.full_name.value}
              />
            )}
          </Space>
        </Col>

        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Select Gender *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.gender.value}</Typography.Text>
            ) : (
              <Select
                value={"male"}
                size="large"
                style={{ width: "200%" }}
                disabled={!data.full_name.is_editable}
                options={[
                  { value: "male", label: "male" },
                  { value: "female", label: "female" },
                ]}
              />
            )}
          </Space>
        </Col>

        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Date of Birth *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.date_of_birth.value}</Typography.Text>
            ) : (
              <DatePicker
                disabled={!data.date_of_birth.is_editable}
                size="large"
                defaultValue={dayjs(data.date_of_birth.value, "YYYY-MM-DD")}
              />
            )}
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Phone Number *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.phone_number.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.phone_number.is_editable}
                addonBefore={<PhoneFilled />}
                size="large"
                defaultValue={data.phone_number.value}
              />
            )}
          </Space>
        </Col>

        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Email *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.email.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.email.is_editable}
                addonBefore={"@"}
                size="large"
                defaultValue={data.email.value}
              />
            )}
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-20">
        <Col xs={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">PAN number *</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.pan_number.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.pan_number.is_editable}
                addonBefore={<IdcardFilled />}
                size="large"
                defaultValue={data.pan_number.value}
              />
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachDetail;
