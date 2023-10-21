import React, { useState } from "react";
import CustomSwitch from "../../components/custom-switch/custom-switch";
import PageHeader from "../../components/page-header/page-header";
import { Col, Divider, Row, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import CSS from "./settings.module.scss"
import FeedbackCard from "../../components/feedback-card/feedback-card";

type SwitchItem = {
  Key: React.Key,
  Title: string,
  Text: string,
  IsActive: boolean,
  Group: string
}

const Settings = () => {

  const [settingData, setSettingData] = useState<SwitchItem[]>([
    {
      Key: "s1",
      Title: "A setting Header",
      Text: "Description here",
      IsActive: false,
      Group: "Vivamus Id sapien"
    },
    {
      Key: "s2",
      Title: "A setting Header",
      Text: "Description here",
      IsActive: true,
      Group: "Vivamus Id sapien"
    },
    {
      Key: "s3",
      Title: "A setting Header",
      Text: "Description here",
      IsActive: false,
      Group: "Vivamus Id sapien"
    },
    {
      Key: "s4",
      Title: "A setting Header",
      Text: "Description here",
      IsActive: false,
      Group: "Marketing communacations"
    }
  ]);

  const groups = Array.from(new Set(settingData.map((item) => item.Group)));

  const handleOnChangeClick = (switchItem: SwitchItem, checked: boolean) => {
    setSettingData(prevData =>
      prevData.map(item => {
        if (item.Key === switchItem.Key)
          return { ...item, IsActive: checked };
        return item;
      })
    )
  }
  const handleOnFeedbackClick = () => {
    console.log("Feedback button clicked")
  }
  return (
    <div className={CSS.container}>
      <PageHeader Icon={SettingOutlined} Title="Lorems" Description="Velita" />
      <Divider className="cs-tm-20" />
      <div className="mt-10 mb-10">
        {
          groups.map((grp,index) => {
            return (
              <div key={index}>
                <div className="cs-bm-10 cs-tm-30">
                  <Typography.Title
                    level={4}
                    className={CSS.group_heading}
                  >
                    {grp}
                  </Typography.Title>
                </div>
                <Row gutter={[20, 20]}>
                  {
                    settingData.filter(item => item.Group === grp).map((item,subindex) => {
                      return (
                        <Col xs={24} sm={12} lg={8} key={subindex}>
                          <CustomSwitch title={item.Title} text={item.Text} onChange={(checked: boolean) => { handleOnChangeClick(item, checked) }} isAcitve={item.IsActive} />
                        </Col>
                      )
                    })
                  }
                </Row>
              </div>
            )
          })
        }
      </div>
      <Divider className="cs-tm-40" />
      <div>
        <div className="cs-bm-10">
          <Typography.Title level={4}>Feedback</Typography.Title>
        </div>
        <Row>
          <Col xs={24} sm={12} lg={8}>
            <FeedbackCard title="Send Feedback" text="Give us your feedback" onClick={handleOnFeedbackClick} style="filled" />
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default Settings;
