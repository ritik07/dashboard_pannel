import React, { useState } from "react";
import CSS from "./collapsible-card.module.scss";
import { Card, Col, Row, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  text: string;
};

const CollapsibleCard: React.FC<Props> = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Row>
      <Col xs={24} xl={24}>
        <Card
          bordered={false}
          onClick={toggleCard}
          className={CSS.container}
          bodyStyle={{ padding: "1.5rem" }}
        >
          <div className="cs-dis-flex">
            {isExpanded ? (
              <MinusOutlined className={CSS.icon} />
            ) : (
              <PlusOutlined className={CSS.icon} />
            )}
            <Typography.Title level={5}>{props.title}</Typography.Title>
          </div>
          {isExpanded && (
            <div className={CSS.text_container}>
              <div className={CSS.text_block}>
                <Typography.Title level={5} type="secondary">
                  {props.text}
                </Typography.Title>
              </div>
            </div>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default CollapsibleCard;
