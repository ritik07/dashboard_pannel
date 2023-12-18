import React from "react";
import CSS from "./upi-card.module.scss";
import { Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const AddUPI = () => {
  return (
    <div className={CSS.card_container}>
      <div className={CSS.add_upi_coontent}>
        <div className="cs-dis-flex cs-vt-center">
          <Typography.Text className={CSS.bank_name}>
            Add New UPI
          </Typography.Text>
        </div>
        <PlusCircleFilled className={CSS.add_icon} />
      </div>
    </div>
  );
};

export default AddUPI;
