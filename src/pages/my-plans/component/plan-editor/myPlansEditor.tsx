import React, { useState } from "react";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Card, Col, Collapse, Row, Typography } from "antd";
import ComputePlan from "./compute-plan/compute-plan";
import Current from "./current/current";
import Coach from "./coach/coach";
import Kyc from "./kyc/kyc";
import CSS from "./myPlansEditor.module.scss";
import Uploader from "./uploader/uploader";
import ModalView from "./modal/modal";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

interface IGetCollapseLabel {
  header: string;
  label?: string;
  secondaryHeader?: string;
  secondaryLabel?: string;
}

const getCollapseLabel = ({
  header,
  label,
  secondaryHeader,
  secondaryLabel,
}: IGetCollapseLabel) => {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} xl={11}>
        <Typography.Title level={4}>{header}</Typography.Title>
        <Typography.Text type="secondary">{label}</Typography.Text>
      </Col>

      <Col xs={24} xl={2}></Col>

      <Col xs={24} xl={11}>
        <Typography.Title level={4}>{secondaryHeader}</Typography.Title>
        <Typography.Text type="secondary">{secondaryLabel}</Typography.Text>
      </Col>
    </Row>
  );
};

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: getCollapseLabel({
      header: "Current Coach Detail",
      label: "Badminton coach",
      secondaryHeader: "Your Monthly Coach",
      secondaryLabel: "Our reliable coach",
    }),
    children: <ComputePlan />,
    style: panelStyle,
  },
  {
    key: "2",
    label: getCollapseLabel({
      header: "Current Badminton Coach",
    }),
    children: <Current />,
    style: panelStyle,
  },
  {
    key: "3",
    label: getCollapseLabel({
      header: "Badminton Coach",
    }),
    children: <Coach />,
    style: panelStyle,
  },
  {
    key: "4",
    label: getCollapseLabel({
      header: "KYC",
    }),
    children: <Kyc />,
    style: panelStyle,
  },
];

const MyPlansEditor = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const panelStyle: React.CSSProperties = {
    marginBottom: 4,
    // background: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <div>
      <Collapse
        bordered={false}
        style={{ background: "#fff" }}
        defaultActiveKey={[1]}
        accordion
        items={getItems(panelStyle)}
      />
      <Card className={CSS.card}>
        <div className="cs-dis-flex cs-center">
          <div className={CSS.save} onClick={() => setIsModalOpen(true)}>
            Save & Edit
          </div>

          <div className={CSS.cancel}>Cancel</div>
        </div>
      </Card>

      <Card className="cs-tm-20">
        <Col xl={24} xs={24} className={CSS.cs_upload_wrapper}>
          <div className="cs-bm-30">
            <Typography.Title level={4}>
              Badminton Coach Document
            </Typography.Title>
          </div>
          <Uploader />
        </Col>
      </Card>
      {isModalOpen ? <ModalView setIsModalOpen={setIsModalOpen} /> : null}
    </div>
  );
};

export default MyPlansEditor;
