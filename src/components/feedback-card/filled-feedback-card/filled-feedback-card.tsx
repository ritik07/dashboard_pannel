import React from "react";
import CSS from "./filled-feedback-card.module.scss";
import { Card, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  text: string;
  onClick: () => void;
};

const FilledFeedbackCard: React.FC<Props> = (props: Props) => {
  return (
    <Card
        bordered={false}
        className={CSS.container}
        bodyStyle={{ display: "flex", padding: "1.5rem" }}
      >
        <div className={CSS.data_container}>
          <Typography.Title level={4} className={CSS.title_text} >
            {props.title}
          </Typography.Title>
          <Typography.Text className={CSS.text}>
            {props.text}
          </Typography.Text>
        </div>
        <ArrowRightOutlined
          className={CSS.feedback_arrow}
          onClick={props.onClick}
        />
      </Card>
  );
};

export default FilledFeedbackCard;
