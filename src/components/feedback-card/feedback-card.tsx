import React from "react";
import CSS from "./feedback-card.module.scss";
import { Card, Col, Row, Space, Typography } from "antd";
import { FolderOutlined, ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  text: string;
  onClick: () => void;
};

const FeedbackCard: React.FC<Props> = (props: Props) => {
  return (
    <Row>
      <Col xs={12}>
        <Card
          bordered={false}
          className={CSS.container}
          bodyStyle={{ display: "flex" }}
        >
          <div className={CSS["circular-card"]}>
            <FolderOutlined style={{ fontSize: "3rem" }} />
          </div>
          <div className={CSS["data-container"]}>
            <Space direction="vertical">
              <Typography.Title
                level={5}
                style={{
                  color: "#615BAE" /* ,lineHeight:"1",verticalAlign:"middle" */,
                }}
              >
                {props.title}
              </Typography.Title>
              <Typography.Text
                className="mt-4" /* style={{lineHeight:"1",verticalAlign:"middle"}} */
              >
                {props.text}
              </Typography.Text>
            </Space>
          </div>
          <ArrowRightOutlined
            style={{ fontSize: "3rem", alignItems: "end", color: "#3374D2" }}
            onClick={props.onClick}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default FeedbackCard;
