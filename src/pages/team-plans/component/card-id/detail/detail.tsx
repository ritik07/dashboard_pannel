import React, { useState } from "react";
import { Col, Divider, Input, Row, Typography } from "antd";
import CoachDetail from "./coach-detail";
import CoachDetail2 from "./coach-detail2";
import CoachContact from "./coach-contact";
import CoachDetail3 from "./coach-detail3";
import CoachSub from "./coach-sub";
import CSS from "./detail.module.scss";

interface IData {
  data: any[];
}

const Detail = ({ data }: IData) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <div>
      <CoachDetail
        editMode={editMode}
        data={data}
        header={"Coach Details"}
        setEditMode={setEditMode}
      />

      <CoachDetail2 editMode={editMode} data={data} header={"Coach Details"} />

      <CoachContact editMode={editMode} data={data} header={"Coach Contacts"} />

      <CoachDetail3 editMode={editMode} data={data} header={"Coach Details"} />

      <CoachSub data={data} header={"Coaching Subscription"} />

      <Divider className="cs-tm-20 cs-bm-30" />

      <Typography.Title level={5}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores minus
        amet molestias fuga voluptas numquam suscipit tenetur deserunt
        voluptatum natus maiores, libero veritatis beatae quibusdam, commodi
        quia praesentium. Nesciunt, voluptatibus!
      </Typography.Title>

      <Input.TextArea className="cs-tm-30" placeholder="Remark" />

      {editMode ? (
        <div className={CSS.button_Container}>
          <Row gutter={[20, 20]}>
            <Col>
              <div className={CSS.decline} onClick={() => setEditMode(false)}>
                <Typography.Title level={5}>Cancel</Typography.Title>
              </div>
            </Col>
            <Col>
              <div className={CSS.approve}>
                <Typography.Title level={5} className={CSS.txt_approve}>
                  Save & Edit
                </Typography.Title>
              </div>
            </Col>
          </Row>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
