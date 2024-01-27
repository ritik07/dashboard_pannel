import React from "react";
import { Divider, Tooltip, Typography } from "antd";
import { ApiFilled, InfoCircleFilled } from "@ant-design/icons";
import CSS from "./sider.module.scss";

const CoachingCard = () => {
  return (
    <div className={CSS.card_coaching}>
      <div className="cs-dis-flex cs-hrz-center">
        <div className="cs-rm-10">
          <ApiFilled className={CSS.icon_card} />
        </div>
        <div className="cs-dis-flex cs-vt-center">
          <Typography.Title level={4}>Team Coaching</Typography.Title>
        </div>
      </div>
      <div className="cs-dis-flex cs-hrz-center cs-tm-20">
        <div>
          <Typography.Title level={5}>
            Karnataka Sports Academy
          </Typography.Title>
          <div className="cs-dis-flex cs-hrz-center cs-tm-10">
            <div className="cs-dis-flex cs-hrz-center">
              <Tooltip title="prompt text">
                <InfoCircleFilled className={CSS.info_icon} />
              </Tooltip>
            </div>
            <div className="cs-dis-flex cs-hrz-center">
              <Typography.Text className={CSS.info_text}>
                Coaches summary
              </Typography.Text>
            </div>
          </div>
          <div>
            <div className="cs-tm-40 cs-dis-flex cs-jc-sb">
              <Typography.Title level={5}>Active</Typography.Title>

              <Typography.Title level={5}>1</Typography.Title>
            </div>

            <div className="cs-tm-20 cs-dis-flex cs-jc-sb">
              <Typography.Title level={5}>Approved</Typography.Title>

              <Typography.Title level={5}>40</Typography.Title>
            </div>

            <div className="cs-tm-20 cs-dis-flex cs-jc-sb">
              <Typography.Title level={5} className={CSS.declined}>
                Declined
              </Typography.Title>

              <Typography.Title level={5} className={CSS.declined}>
                4
              </Typography.Title>
            </div>
          </div>

          <Divider className="cs-tm-20" />

          <div className="cs-tm-20 cs-dis-flex cs-jc-sb">
            <Typography.Title level={5}>Total Coaches</Typography.Title>

            <Typography.Title level={5} className={CSS.info_text}>
              43
            </Typography.Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingCard;
