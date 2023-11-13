import React from "react";
import CSS from "./claims.module.scss";
import PageHeader from "../../components/page-header/page-header";
import { ProfileOutlined, HistoryOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Space, Typography, Tabs } from "antd";
import FeatureCard from "./feature-card/feature-card";
import type { TabsProps } from "antd";

const Claims = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "A2",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "A3",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "A4",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className={CSS.container}>
      <PageHeader
        Icon={ProfileOutlined}
        Title="My Claims"
        Description="lorem"
      />

      <Divider className="cs-tm-20 cs-bm-30" />

      <div>
        <Row>
          <Col xs={6}>
            <FeatureCard />
          </Col>
        </Row>
      </div>

      <Divider className="cs-tm-30" />

      <div className="cs-tm-40">
        <Space direction="horizontal">
          <HistoryOutlined className={CSS.verified} />

          <Typography.Title level={5} className={CSS.verified}>
            Libero
          </Typography.Title>
        </Space>

        <div className="cs-lm-20">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Claims;
