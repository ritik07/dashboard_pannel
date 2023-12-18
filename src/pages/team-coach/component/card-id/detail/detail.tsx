import { Divider, Typography } from "antd";
import React from "react";
import CoachDetail from "./coach-detail";
import CoachDetail2 from "./coach-detail2";
import CoachContact from "./coach-contact";
import CoachDetail3 from "./coach-detail3";
import CoachSub from "./coach-sub";
import CSS from "./detail.module.scss";

const Detail = () => {
  return (
    <div>
      <CoachDetail header={"Coach Details"} />

      <CoachDetail2 header={"Coach Details"} />

      <CoachContact header={"Coach Contacts"} />

      <CoachDetail3 header={"Coach Details"} />

      <CoachSub header={"Coaching Subscription"} />

      <Divider className="cs-tm-20 cs-bm-30" />

      <Typography.Title level={5}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores minus
        amet molestias fuga voluptas numquam suscipit tenetur deserunt
        voluptatum natus maiores, libero veritatis beatae quibusdam, commodi
        quia praesentium. Nesciunt, voluptatibus!
      </Typography.Title>

      <div className={CSS.button_Container}>
        <div className={CSS.decline}>
          <Typography.Title level={5}>Decline</Typography.Title>
        </div>

        <div className={CSS.approve}>
          <Typography.Title level={5} className={CSS.txt_approve}>Approve</Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default Detail;
