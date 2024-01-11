import React from "react";
import { Col, DatePicker, Input, Row, Select, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

interface ICoachDetail {
  header: string;
  data: any;
  editMode: boolean;
}

const CoachDetail2 = ({ header, data, editMode }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row gutter={[20, 20]} className="cs-tm-20">
        <Col xl={24} xs={24}>
          <Space direction="vertical">
            <Typography.Text type="secondary">
              {data.company_name.value}
            </Typography.Text>
            {!editMode ? (
              <Typography.Text>
                Karnataka sports company Pvt Ltd.
              </Typography.Text>
            ) : (
              <Input
                disabled={!data.company_name.is_editable}
                addonBefore={<UserOutlined />}
                size="large"
                defaultValue={data.company_name.value}
              />
            )}
          </Space>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="cs-tm-20">
        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Employment Type</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.employment_type.value}</Typography.Text>
            ) : (
              <Select
                value={data.employment_type.value}
                size="large"
                style={{ width: "150%" }}
                disabled={!data.employment_type.is_editable}
                options={[{ value: "full-time", label: "full-time" }]}
              />
            )}
          </Space>
        </Col>

        <Col xs={24} xl={6}>
          <Space direction="vertical">
            <Typography.Text type="secondary">Joining Month</Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.joining_month.value}</Typography.Text>
            ) : (
              <DatePicker
                disabled={!data.joining_month.is_editable}
                size="large"
                defaultValue={dayjs(data.joining_month.value, "YYYY-MM-DD")}
              />
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachDetail2;
