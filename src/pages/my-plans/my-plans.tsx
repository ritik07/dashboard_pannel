import React, { useState } from "react";
import CSS from "./my-plans.module.scss";
import PageHeader from "../../components/page-header/page-header";
import { ProfileOutlined } from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import MyPlansViewer from "./component/plans-viewer/myPlansViewer";
import MyPlansEditor from "./component/myPlansEditor";
import PlanSider from "./component/planSider";

const MyPlans = () => {
  /**
   * @states
   */
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={CSS.container}>
      <PageHeader
        Icon={ProfileOutlined}
        Title="My Plans"
        Description="Badinton Coach Overview"
      />

      <Divider className="cs-tm-20" />

      <Row gutter={[25, 25]}>
        <Col xs={17}>{!editMode ? <MyPlansViewer /> : <MyPlansEditor />}</Col>

        <Col xs={6}>
          <PlanSider />
        </Col>
      </Row>
    </div>
  );
};

export default MyPlans;
