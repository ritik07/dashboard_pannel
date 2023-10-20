import React from "react";
import CSS from "./normal-feedback-card.module.scss";
import { Card, Typography } from "antd";
import { FolderOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CircularCardIcon from "../../circular-card-icon/circular-card-icon";

type Props = {
    title: string;
    text: string;
    onClick: () => void;
};

const NormalFeedbackCard: React.FC<Props> = (props: Props) => {    
    return (
        <Card
            bordered={false}
            className={CSS.container}
            bodyStyle={{ display: "flex", padding: "1.5rem" }}
        >
            <CircularCardIcon icon={FolderOutlined} size={3} padding={1} backgroundColor={'#3374D2'} color="#fff" />
            <div className={CSS.data_container}>
                <Typography.Title level={5} className={CSS.title_text} >
                    {props.title}
                </Typography.Title>
                <Typography.Text>
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

export default NormalFeedbackCard;
