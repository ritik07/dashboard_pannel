import React, { useState } from "react";
import CSS from "./team-plans.module.scss";
import PageHeader from "../../components/page-header/page-header";
import { TeamOutlined } from "@ant-design/icons";
import {
  Col,
  Divider,
  Input,
  Pagination,
  Row,
  Space,
  Tabs,
  Typography,
} from "antd";
import CardId from "./component/card-id/card-id";
import Sider from "./component/sider/sider";
import FeatureCard from "../claims/feature-card/feature-card";
import type { TabsProps } from "antd";
import All from "./component/tabs/all/all";
import { SearchOutlined } from "@ant-design/icons";

const TeamPlans = () => {
  const DUMMY_DATA = [
    {
      full_name: { value: "John Doe", is_editable: false },
      gender: { value: "Male", is_editable: true },
      date_of_birth: { value: "1990-01-15", is_editable: false },
      phone_number: { value: "123-456-7890", is_editable: true },
      email: { value: "john.doe@example.com", is_editable: true },
      pan_number: { value: "ABCDE1234F", is_editable: false },
      company_name: { value: "XYZ Corp", is_editable: true },
      employment_type: { value: "Full-time", is_editable: true },
      joining_month: { value: "1990-01-15", is_editable: false },
      manager_name: { value: "Manager One", is_editable: true },
      hr_name: { value: "HR Officer", is_editable: true },
      manager_phone: { value: "987-654-3210", is_editable: true },
      hr_phone: { value: "876-543-2109", is_editable: true },
      fee_per_session: { value: 50.0, is_editable: true },
    },
    {
      full_name: { value: "Rohn Doe", is_editable: false },
      gender: { value: "Male", is_editable: true },
      date_of_birth: { value: "1990-01-15", is_editable: false },
      phone_number: { value: "123-456-7890", is_editable: true },
      email: { value: "john.doe@example.com", is_editable: true },
      pan_number: { value: "ABCDE1234F", is_editable: false },
      company_name: { value: "XYZ Corp", is_editable: true },
      employment_type: { value: "Full-time", is_editable: true },
      joining_month: { value: "1990-01-15", is_editable: false },
      manager_name: { value: "Manager One", is_editable: true },
      hr_name: { value: "HR Officer", is_editable: true },
      manager_phone: { value: "987-654-3210", is_editable: true },
      hr_phone: { value: "876-543-2109", is_editable: true },
      fee_per_session: { value: 50.0, is_editable: true },
    },
    {
      full_name: { value: "Tohn Doe", is_editable: false },
      gender: { value: "Male", is_editable: true },
      date_of_birth: { value: "1990-01-15", is_editable: false },
      phone_number: { value: "123-456-7890", is_editable: true },
      email: { value: "john.doe@example.com", is_editable: true },
      pan_number: { value: "ABCDE1234F", is_editable: false },
      company_name: { value: "XYZ Corp", is_editable: true },
      employment_type: { value: "Full-time", is_editable: true },
      joining_month: { value: "1990-01-15", is_editable: false },
      manager_name: { value: "Manager One", is_editable: true },
      hr_name: { value: "HR Officer", is_editable: true },
      manager_phone: { value: "987-654-3210", is_editable: true },
      hr_phone: { value: "876-543-2109", is_editable: true },
      fee_per_session: { value: 50.0, is_editable: true },
    },
  ];
  const [filterBy, setFilterBy] = useState<number>(1);

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(DUMMY_DATA);

  const data: any = [{}, {}];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All",
      children: <All data={data} filterBy={filterBy} />,
    },
    {
      key: "2",
      label: "Approved",
      children: <All data={data} filterBy={filterBy} />,
    },
    {
      key: "3",
      label: "Pending",
      children: <All data={data} filterBy={filterBy} />,
    },
  ];

  const handleSearch = (value: string) => {
    setSearchInput(value);

    // Filter the data based on the search input
    const filtered = DUMMY_DATA.filter((coach) =>
      coach.full_name.value.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
  };
  return (
    <div className={CSS.container}>
      <PageHeader
        Icon={TeamOutlined}
        Title="Team Plans"
        Description="Select team members to view their coaching details"
      />

      <Divider className="cs-tm-20 cs-bm-30" />

      <div className="cs-tm-40">
        <Row gutter={[20, 20]}>
          <Col xs={24} xl={16}>
            <Row>
              <Col xs={24} xl={10}>
                <Input
                  addonBefore={<SearchOutlined />}
                  placeholder="Search for Coach"
                  onChange={(e) => handleSearch(e.target.value)}
                  value={searchInput}
                />
              </Col>
            </Row>
            <div>
              <CardId data={filteredData} />
            </div>
          </Col>

          <Col xs={24} xl={8}>
            <Sider />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TeamPlans;
