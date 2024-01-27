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

interface ClaimData {
  name: string;
  status: string;
}

const Claims: React.FC = () => {
  const [filterBy, setFilterBy] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5; // Number of items per page

  const data: ClaimData[] = [
    { name: "coach 1", status: "Approved" },
    { name: "coach 2", status: "Approved" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    { name: "coach 3", status: "Pending" },
    // Add more data as needed
  ];

  const filteredData = data.filter((item) => {
    if (filterBy === 1) return true; // All
    return item.status === (filterBy === 2 ? "Approved" : "Pending");
  });

  const totalItems = filteredData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All",
      children: <All data={displayedData} filterBy={filterBy} />,
    },
    {
      key: "2",
      label: "Approved",
      children: <All data={displayedData} filterBy={filterBy} />,
    },
    {
      key: "3",
      label: "Pending",
      children: <All data={displayedData} filterBy={filterBy} />,
    },
  ];

  const onChangeFilter = (key: string) => {
    setFilterBy(Number(key));
    setCurrentPage(1); // Reset page when changing filter
  };

  const onChangePage = (page: number) => {
    setCurrentPage(page);
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
            <Col xs={24} xl={17}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChangeFilter}
              />
              <Divider className="cs-tm-20 cs-bm-30" />
              <div className="cs-dis-flex cs-hrz-center">
                <Pagination
                  defaultCurrent={1}
                  current={currentPage}
                  total={totalItems}
                  pageSize={pageSize}
                  onChange={onChangePage}
                />
              </div>
            </Col>
            <Col xs={24} xl={6}>
              <FeatureCard />
            </Col>
            <Col xs={24} xl={1}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Claims;
