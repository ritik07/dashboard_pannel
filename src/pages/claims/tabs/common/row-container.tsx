import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Collapse, Space, Steps, Card } from "antd";
import CSS from "./row-container.module.scss";
import { ApiFilled, CheckOutlined, InfoOutlined } from "@ant-design/icons";

interface IRowContainer {
  filterBy: any;
  data: any[];
}

const items = [
  {
    title: <div>Coach Assessment</div>,
    icon: <CheckOutlined />,
  },
  {
    title: "Investigation in Progress",
    icon: <InfoOutlined />,
  },
  {
    title: "Coach Status",
    icon: <InfoOutlined />,
  },
  {
    title: "Assignement close",
    icon: <InfoOutlined />,
  },
];

const RowContainer = ({ filterBy, data }: IRowContainer) => {
  const DUMMY_DATA = data.map((item, index) => {
    return {
      key: index,
      label: (
        <Card className="custom-team-card-border-none">
          <Row>
            <Col xs={6}>
              <Space direction="horizontal">
                <ApiFilled className={CSS.icon} />
                <Typography.Title level={5}>Coach Name</Typography.Title>
              </Space>
            </Col>
            <Col xs={6} className="cs-dis-flex cs-vt-center">
              <Typography.Text type="secondary">#0009</Typography.Text>
            </Col>

            <Col xs={6} className="cs-dis-flex cs-vt-center">
              <Typography.Text type="secondary">21/03/2022</Typography.Text>
            </Col>

            <Col xs={6} className="cs-dis-flex cs-vt-center">
              <Typography.Text type="secondary" className={CSS.pending}>
                Pending
              </Typography.Text>
            </Col>
          </Row>
        </Card>
      ),
      children: (
        <div className={CSS.child_card}>
          <div className="cs-lm-40">
            <Typography.Title level={5}>
              Coach ID: <span className={CSS.id_clr}>#00091-124</span>
            </Typography.Title>
          </div>
          <Row className="cs-tm-30">
            <Col xs={24}>
              <Steps
                iconPrefix=""
                current={1}
                labelPlacement="vertical"
                items={items}
              />
            </Col>
          </Row>

          <div className={CSS.closed + " cs-tm-20"}>
            <Typography.Text>Status: Assissement Closed</Typography.Text>
            <div className="cs-tm-10">
              <Typography.Text>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface
              </Typography.Text>
            </div>
          </div>
        </div>
      ),
    };
  });

  const [filteredData, setFilteredData] = useState(DUMMY_DATA);

  return (
    <Collapse
      accordion
      expandIcon={() => null}
      items={DUMMY_DATA}
      className="cs-bm-20 custom-collapse"
      ghost
    ></Collapse>
  );
};

export default RowContainer;
