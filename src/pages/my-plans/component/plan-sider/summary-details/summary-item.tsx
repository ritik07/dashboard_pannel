import { Space, Typography } from "antd";
import React from "react";

interface ISummaryItem {
  title: string;
  value: string;
}

const SummaryItem = ({ title, value }: ISummaryItem) => {
  return (
    <div>
      <Space direction="horizontal">
        <Typography.Text type="secondary">{title}:</Typography.Text>
        <Typography.Text>{value}</Typography.Text>
      </Space>
    </div>
  );
};

export default SummaryItem;
