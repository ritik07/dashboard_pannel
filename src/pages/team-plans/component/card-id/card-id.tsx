import React, { useState } from "react";
import { Card, Collapse, Typography } from "antd";
import CSS from "./card-id.module.scss";
import { UserOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import Detail from "./detail/detail";

interface ICardIDData {
  data: any[];
}

const CardId = ({ data }: ICardIDData) => {
  const [activeKeyStat, setActiveKeyStat] = useState<any[]>([]);

  const handleViewDetail = (value: number) => {
    if (activeKeyStat[0] === value) {
      setActiveKeyStat([]);
    } else {
      setActiveKeyStat([value]);
    }
  };

  const items: any = data.map((item, index) => {
    return {
      key: index,
      label: (
        <Card className="custom-team-card-border-none">
          <div className="cs-dis-flex cs-jc-sb">
            <div className="cs-dis-flex">
              <UserOutlined className={CSS.user_icon} />
              <Typography.Title
                level={3}
                className={CSS.text_color}
                color="#12b24e"
              >
                {item.full_name.value}
              </Typography.Title>
            </div>
            <div
              className={CSS.view_caoch_btn}
              onClick={() => handleViewDetail(index)}
            >
              {activeKeyStat.length && index == activeKeyStat[0] ? (
                <UpOutlined />
              ) : (
                <DownOutlined />
              )}
            </div>
          </div>
        </Card>
      ),
      children: (
        <div className={CSS.child_card}>
          <Detail data={item} />
        </div>
      ),
    };
  });
  return (
    <div className="cs-tm-20">
      <Collapse
        activeKey={activeKeyStat}
        collapsible="icon"
        expandIcon={({ isActive }) => null}
        items={items}
        className="cs-bm-20 custom-collapse"
        ghost
      ></Collapse>
    </div>
  );
};

export default CardId;
