import React, { useState } from "react";
import CSS from "./custom-switch.module.scss";
import { Card, Col, Row, Switch, Typography } from "antd";
import "../../styles/_colors.scss"

type Props = {
    title: string;
    text: string;
    onChange: (checked: boolean) => void;
    isAcitve: boolean
};

const CustomSwitch: React.FC<Props> = (props: Props) => {
    
    return (
        <Row>
            <Col xs={24}>
                <Card
                    bordered
                    className={CSS.container}
                    bodyStyle={{ padding: "1.5rem" }}
                >
                    <div className={CSS.heading}>
                        <Typography.Title level={4} className={CSS.title_text} >
                            {props.title}
                        </Typography.Title>
                        <Switch 
                            className={CSS.title_action} 
                            onChange={props.onChange} 
                            defaultChecked={props.isAcitve} 
                            style={{
                                backgroundColor: props.isAcitve ? '#34D370' : "#888"
                            }} />
                    </div>

                    <Typography.Text>
                        {props.text}
                    </Typography.Text>
                </Card>
            </Col>
        </Row>
    );
};

export default CustomSwitch;
