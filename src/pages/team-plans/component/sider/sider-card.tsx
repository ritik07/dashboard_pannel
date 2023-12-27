import React from "react";
import CSS from "./sider.module.scss";
import { Typography } from "antd";
import Fitlers from "./fitlers";
import UpgradePlan from "./upgrade-plan/upgrade-plan";

const SiderCard = () => {
  const DUMMY_FILTER = [
    { name: "Injury Helpline" },
    { name: "Personal phone calls" },
    { name: "Cricket Coaching" },
    { name: "Fraud or misconduct" },
  ];
  return (
    <div>
      <div className={CSS.sider_card}>
        <div className={CSS.add_new_member_btn}>Add new team member</div>
        <div className="cs-tm-15">
          <Typography.Title level={5}>
            Exclusion and Limitation
          </Typography.Title>
          <Typography.Text type="secondary">
            What our coaches does not cover
          </Typography.Text>
          <Fitlers tags={DUMMY_FILTER} />
        </div>
      </div>
      <div className="cs-tm-20">
        <UpgradePlan />
      </div>
    </div>
  );
};

export default SiderCard;
