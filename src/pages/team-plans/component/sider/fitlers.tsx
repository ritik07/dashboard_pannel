import React from "react";
import CSS from "./sider.module.scss";
import { Col, Row, Tag, Typography } from "antd";

interface IFilter {
  tags: any[];
}

const Fitlers = ({ tags }: IFilter) => {
  return (
    <div className="cs-tm-10">
      <Row>
        {tags.map((item) => {
          return (
            <Col xs={24}>
              <Tag className={CSS.tags + " cs-tm-10"}>{item.name}</Tag>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Fitlers;
