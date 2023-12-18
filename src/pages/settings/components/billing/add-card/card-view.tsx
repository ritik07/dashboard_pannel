import React from "react";
import CSS from "./add-card.module.scss";
import { Space, Typography } from "antd";
import { DeleteFilled } from "@ant-design/icons";

const CardView = () => {
  return (
    <div className={CSS.card_container}>
      <div className={CSS.card_coontent}>
        <Space direction="vertical">
          <Typography.Text className={CSS.bank_name}>
            HDFC Bank Card
          </Typography.Text>
          <Typography.Text>**** 88790 88790</Typography.Text>
        </Space>
        <div className="cs-dis-flex cs-vt-center">
          <div className={CSS.remove_icon_container}>
            <DeleteFilled className={CSS.remove_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
