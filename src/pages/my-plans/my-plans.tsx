import React, { useState } from "react";
import CSS from "./my-plans.module.scss";
import PageHeader from "../../components/page-header/page-header";
import { ProfileOutlined } from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import MyPlansViewer from "./component/plans-viewer/myPlansViewer";
import MyPlansEditor from "./component/plan-editor/myPlansEditor";
import PlanSider from "./component/plan-sider/planSider";

const MyPlans = () => {
  /**
   * @states
   */
  const [editMode, setEditMode] = useState(false);

  const handleOnUpdate = () => {
    setEditMode(true);
  };
  return (
    <div className={CSS.container}>
      <PageHeader
        Icon={ProfileOutlined}
        Title="My Plans"
        Description="Badinton Coach Overview"
      />

      <Divider className="cs-tm-20" />

      <Row gutter={[25, 25]}>
        <Col xs={24} xl={16}>
          {!editMode ? <MyPlansViewer /> : <MyPlansEditor />}
        </Col>

        <Col xs={24} xl={7}>
          <PlanSider handleOnUpdate={handleOnUpdate} editMode={editMode} />
        </Col>
      </Row>
    </div>
  );
};

export default MyPlans;
