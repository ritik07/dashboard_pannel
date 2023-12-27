import React from "react";
import { Col, Input, Row, Space, Typography } from "antd";
import {
  UserOutlined,
  PhoneFilled,
  MoneyCollectFilled,
} from "@ant-design/icons";

interface ICoachDetail {
  header: string;
  data: any;
  editMode: boolean;
}

const CoachDetail3 = ({ header, data, editMode }: ICoachDetail) => {
  return (
    <div className="cs-tm-30">
      <Typography.Title level={4}>{header}</Typography.Title>

      <Row className="cs-tm-20">
        <Col xs={24}>
          <Space direction="vertical">
            <Typography.Text type="secondary">
              Coach per session
            </Typography.Text>
            {!editMode ? (
              <Typography.Text>{data.fee_per_session.value}</Typography.Text>
            ) : (
              <Input
                disabled={!data.fee_per_session.is_editable}
                addonBefore={<MoneyCollectFilled />}
                size="large"
                defaultValue={data.fee_per_session.value}
              />
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CoachDetail3;
