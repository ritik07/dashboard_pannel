import React from "react";
import PageHeader from "../../components/page-header/page-header";
import {
  ProfileOutlined,
  UserOutlined,
  LayoutOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import CSS from "./profile.module.scss";
import { Card, Col, Divider, Row, Space, Typography } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import UserDetail from "./user-detail/user-detail";
import CoCoachingHistory from "./co-coaching-history/co-coaching-history";

const Profile = () => {
  return (
    <div className={CSS.container}>
      <PageHeader
        Icon={ProfileOutlined}
        Title="Profile"
        Description="User Preferences"
      />

      <Divider className="cs-tm-20" />

      <UserDetail />

      <div className="cs-tm-40">
        <Space direction="horizontal">
          <HistoryOutlined className={CSS.verified} />

          <Typography.Title level={5} className={CSS.verified}>
            Corporate Coaching History
          </Typography.Title>
        </Space>
        <CoCoachingHistory />
      </div>

      <div className="cs-tm-40">
        <CoCoachingHistory />
      </div>
    </div>
  );
};

export default Profile;
