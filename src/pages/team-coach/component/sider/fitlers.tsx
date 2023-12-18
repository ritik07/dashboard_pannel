import React from "react";
import CSS from "./sider.module.scss";
import { Tag, Typography } from "antd";

interface IFilter {
  tags: any[];
}

const Fitlers = ({ tags }: IFilter) => {
  return (
    <div className="cs-tm-10">
      <Typography.Text type="secondary">Filters</Typography.Text>
      <div>
        {tags.map((item) => {
          return <Tag className={CSS.tags + " cs-tm-10"}>{item.name}</Tag>;
        })}
      </div>
    </div>
  );
};

export default Fitlers;
