import React, { useState } from "react";
import CSS from "./claims.module.scss";
import PageHeader from "../../components/page-header/page-header";
import {
  ProfileOutlined,
  HistoryOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row, Space, Typography, Tabs, Pagination } from "antd";
import FeatureCard from "./feature-card/feature-card";
import type { TabsProps } from "antd";
import All from "./tabs/all/all";
import Approved from "./tabs/approved/approved";

const Claims = () => {
  const [filterBy, setFilterBy] = useState<number>(1);
  const data: any = [{}, {}];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All",
      children: <All data={data} filterBy={filterBy} />,
    },
    {
      key: "2",
      label: "Approved",
      children: <All data={data} filterBy={filterBy} />,
    },
    {
      key: "3",
      label: "Pending",
      children: <All data={data} filterBy={filterBy} />,
    },
  ];

  const onChange = (key: any) => {
    setFilterBy(key);
  };
  return (
    <div className={CSS.container}>
      <PageHeader Icon={FileOutlined} Title="My Claims" Description="lorem" />

      <Divider className="cs-tm-20 cs-bm-30" />

      <div className="cs-tm-40">
        <Space direction="horizontal">
          <HistoryOutlined className={CSS.verified} />

          <Typography.Title level={5} className={CSS.verified}>
            Libero
          </Typography.Title>
        </Space>

        <div className="cs-lm-20">
          <Row gutter={[20, 20]}>
            <Col xs={17}>
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              <Divider className="cs-tm-20 cs-bm-30" />
              <div className="cs-dis-flex cs-hrz-center">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </Col>
            <Col xs={6}>
              <FeatureCard />
            </Col>
            <Col xs={1}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Claims;
