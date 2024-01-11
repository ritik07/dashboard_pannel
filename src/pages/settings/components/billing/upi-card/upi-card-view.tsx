import React from "react";
import CSS from "./upi-card.module.scss";
import { Space, Typography } from "antd";
import { DeleteFilled } from "@ant-design/icons";

const UPICardView = () => {
  return (
    <div className={CSS.card_container}>
      <div className={CSS.card_coontent_view}>
        <Space direction="vertical">
          <Typography.Text className={CSS.bank_name}>
            XYSJ778@okicici
          </Typography.Text>
        </Space>
        <div className="cs-dis-flex cs-vt-center">
          <div className={CSS.remove_txt}>Remove</div>
        </div>
      </div>
    </div>
  );
};

export default UPICardView;
