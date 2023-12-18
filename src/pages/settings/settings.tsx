import React, { useState } from "react";
import CustomSwitch from "../../components/custom-switch/custom-switch";
import PageHeader from "../../components/page-header/page-header";
import { Button, Card, Col, Divider, Row, Space, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import CSS from "./settings.module.scss";
import FeedbackCard from "../../components/feedback-card/feedback-card";
import Account from "./components/account/account";
import Billing from "./components/billing/billing";

type SwitchItem = {
  Key: React.Key;
  Title: string;
  Text: string;
  IsActive: boolean;
  Group: string;
};

const Settings = () => {
  const [accountMode, setAccountMode] = useState(true);

  const changeMode = (value: boolean) => {
    setAccountMode(value);
  };

  return (
    <div className={CSS.container}>
      <PageHeader
        Icon={SettingOutlined}
        Title="Settings"
        Description="User preference"
      />
      <Divider className="cs-tm-20" />

      <Card>
        <Space direction="horizontal">
          {!accountMode ? (
            <Typography.Title
              onClick={() => changeMode(true)}
              type="secondary"
              className="cs-pointer"
              level={5}
            >
              Account
            </Typography.Title>
          ) : (
            <Typography.Title className="cs-pointer" level={5}>
              Account
            </Typography.Title>
          )}

          <div className="cs-lm-20">
            {!accountMode ? (
              <Typography.Title className="cs-pointer" level={5}>
                Billing
              </Typography.Title>
            ) : (
              <Typography.Title
                onClick={() => changeMode(false)}
                type="secondary"
                className="cs-pointer"
                level={5}
              >
                Billing
              </Typography.Title>
            )}
          </div>
        </Space>
      </Card>
      {accountMode ? (
        <>
          <Account />
        </>
      ) : (
        <>
          <Billing />
        </>
      )}
    </div>
  );
};

export default Settings;
