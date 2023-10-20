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
      <Col xs={24}>
        <Card
          bordered={false}
          className={CSS.container}
          bodyStyle={{ padding:"1.5rem" }}
        >
          {isExpanded ? (
            <MinusOutlined onClick={toggleCard} className={CSS.icon} />
          ) : (
            <PlusOutlined onClick={toggleCard} className={CSS.icon} />
          )}          
            <Typography.Text strong>{props.title}</Typography.Text>
            {isExpanded && (
                <div className={CSS.text_container}>
                    <div className={CSS.text_block}>
                    <Typography.Text>
                        {props.text}
                    </Typography.Text>
                    </div>
                </div>
            )}            
        </Card>
      </Col>
    </Row>
  );
};

export default CollapsibleCard;
