import React from "react";
import { Col, Divider, Row, Space, Typography } from "antd";
import { ApiFilled } from "@ant-design/icons";
import CSS from "./feature-card.module.scss";

const FeatureCard = () => {
  return (
    <div className={CSS.container}>
      <Row>
        <Col xs={24}>
          <div className="cs-dis-flex cs-hrz-center">
            <ApiFilled className={CSS.icon} />
          </div>
          <div className="cs-dis-flex cs-hrz-center cs-tm-10">
            <Typography.Title level={4} className="cs-clr-fff">
              Badminton Coach
            </Typography.Title>
          </div>

          <div className="cs-dis-flex cs-hrz-center cs-tm-10">
            <Typography.Text style={{ textAlign: "center", color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              officia, vel quos optio cupiditate autem, fugit, tempore obcaecati
              doloremque dolorem provident odit velit iure in ullam ratione.
              Perferendis, quos vel!
            </Typography.Text>
          </div>

          <Divider style={{ backgroundColor: "#fff" }} />

          <div className="cs-dis-flex cs-hrz-center cs-tm-10">
            <Typography.Title
              level={4}
              className="cs-clr-fff"
              style={{ cursor: "pointer" }}
            >
              Book a Coach
            </Typography.Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeatureCard;
