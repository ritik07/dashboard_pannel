import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button, Typography } from "antd";
import {
  FileTextOutlined,
  FileOutlined,
  ExclamationCircleOutlined,
  SettingOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import CSS from "./layout.template.module.scss";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("My Plans", "1", <FileTextOutlined />),
  getItem("Claims", "2", <FileOutlined />),
  getItem("FAQ", "3", <ExclamationCircleOutlined />),
  getItem("Settings", "4", <SettingOutlined />),
  getItem("Profile", "5", <UserOutlined />),
  getItem("Support", "6", <MessageOutlined />),
];

const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Typography.Title>ServCL</Typography.Title>
      </Header>
      <Layout>
        <Sider
          style={{ backgroundColor: "#2e1e5b" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            style={{ marginTop: 120, backgroundColor: "#2e1e5b" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
          />

          <div
            onClick={toggleCollapsed}
            className={
              `${CSS.layout_collapse_btn_container}` + " cs-dis-flex cs-clr-fff"
            }
          >
            <div className="cs-dis-flex cs-center cs-rm-5 cs-pointer">
              {!collapsed ? <LeftOutlined /> : <RightOutlined />}
            </div>
            {!collapsed && (
              <Typography.Text type="secondary" className="cs-clr-fff cs-pointer">
                Collapse Menu
              </Typography.Text>
            )}
          </div>
          {/* <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button> */}
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
