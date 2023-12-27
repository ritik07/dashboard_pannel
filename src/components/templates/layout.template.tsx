import React, { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button, Typography } from "antd";
import {
  FileTextOutlined,
  FileOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import CSS from "./layout.template.module.scss";
import { Outlet, useNavigate } from "react-router-dom";

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
  getItem("My Plans", "/", <FileTextOutlined />),
  getItem("Claims", "/claims", <FileOutlined />),
  getItem("Team Plans", "/team-plans", <TeamOutlined />),
  getItem("Team Coach", "/team-coach", <TeamOutlined />),
  getItem("FAQ", "/faq", <ExclamationCircleOutlined />),
  getItem("Settings", "/settings", <SettingOutlined />),
  getItem("Profile", "/profile", <UserOutlined />),
  getItem("Support", "/support", <MessageOutlined />),
];

const LayoutContainer: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [currentActive, setCurrentActive] = useState("");

  useEffect(() => {
    console.log("object", "/" + window.location.pathname.split("/")[1]);
    setCurrentActive("/" + window.location.pathname.split("/")[1]);
  }, [window.location.pathname]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenu = (e: { key: string }) => {
    console.log("e", e);
    navigate(e.key);
  };

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
            onClick={(e) => handleMenu(e)}
            style={{ marginTop: 120, backgroundColor: "#2e1e5b" }}
            selectedKeys={[currentActive]}
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
              <Typography.Text
                type="secondary"
                className="cs-clr-fff cs-pointer"
              >
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
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
