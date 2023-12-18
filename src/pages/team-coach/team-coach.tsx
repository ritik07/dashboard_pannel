import React, { useState } from "react";
import CSS from "./team-coach.module.scss";
import PageHeader from "../../components/page-header/page-header";
import { ProfileOutlined, HistoryOutlined } from "@ant-design/icons";
import { Col, Divider, Pagination, Row, Space, Tabs, Typography } from "antd";
import CardId from "./component/card-id/card-id";
import Sider from "./component/sider/sider";
import FeatureCard from "../claims/feature-card/feature-card";
import type { TabsProps } from "antd";
import All from "./component/tabs/all/all";

const TeamCoach = () => {
  const DUMMY_DATA = [{ name: "Rajesh kumar" }, { name: "Swathi Reddy" }];
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
      <PageHeader
        Icon={ProfileOutlined}
        Title="Team Coach"
        Description="lorem"
      />

      <Divider className="cs-tm-20 cs-bm-30" />

      <div className="cs-tm-40">
        <div className={CSS.active_coach_grid}>
          <div>
            <Space direction="horizontal">
              <HistoryOutlined className={CSS.verified} />

              <Typography.Title level={5} className={CSS.verified}>
                Active Coach
              </Typography.Title>
            </Space>

            <div>
              <CardId data={DUMMY_DATA} />
            </div>

            <div className="cs-tm-40">
              <div>
                <Space direction="horizontal">
                  <HistoryOutlined className={CSS.verified} />

                  <Typography.Title level={5} className={CSS.verified}>
                    Coach History
                  </Typography.Title>
                </Space>
                <Row gutter={[20, 20]} className="cs-tm-10">
                  <Col xs={24}>
                    <Tabs
                      defaultActiveKey="1"
                      items={items}
                      onChange={onChange}
                    />
                    <Divider className="cs-tm-20 cs-bm-30" />
                    <div className="cs-dis-flex cs-hrz-center">
                      <Pagination defaultCurrent={1} total={50} />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div>
            <Sider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCoach;
