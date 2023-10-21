import React from "react";
import { Card, Col, Divider, Row, Space, Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import CSS from "./my-plan-viewer.module.scss";
import MonthlyDetail from "./monthly-detail/monthly-detail";
import CompanyDetail from "./company-detail/company-detail";
import MangerDetail from "./manager-detail/manager-detail";
import KycDetail from "./kyc-detail/kyc-detail";

const MyPlansViewer = () => {
  return (
    <div>
      <Card>
        <MonthlyDetail />

        <Divider className="cs-tm-40" />

        <CompanyDetail />

        <Divider className="cs-tm-40" />

        <MangerDetail />

        <Divider className="cs-tm-40" />

        <KycDetail />
      </Card>
    </div>
  );
};

export default MyPlansViewer;
