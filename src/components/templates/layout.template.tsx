import React, { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button, Typography, Row, Col, Space } from "antd";
import {
  FileTextOutlined,
  FileOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  ProfileOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  MessageOutlined,
  LogoutOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import CSS from "./layout.template.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import isMobileView from "./mobile";
import { Footer } from "antd/es/layout/layout";

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
  getItem("Profile", "/profile", <ProfileOutlined />),
  getItem("Team Profile", "/team-profile", <ProfileOutlined />),
  getItem("Support", "/support", <MessageOutlined />),
];

const LayoutContainer: React.FC = () => {
  const navigate = useNavigate();
  const mobileView = isMobileView();
  const [collapsed, setCollapsed] = useState(!mobileView ? false : true);
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
      <Header>
        <Row>
          <Col xl={4}>
            <Typography.Title>ServCL</Typography.Title>
          </Col>
          {!mobileView ? (
            <>
              <Col xl={10}></Col>
              <Col xl={10}>
                <Row gutter={[20, 20]}>
                  <Col xl={24} className={CSS.contaier_lt}>
                    <div style={{ marginRight: "20px" }}>
                      <Typography.Text className={CSS.update_p}>
                        Update plan
                      </Typography.Text>
                    </div>
                    <div className={CSS.contaier_lt}>
                      <Typography.Text className={CSS.org_name}>
                        <BlockOutlined
                          style={{
                            marginRight: "10px",
                            padding: "5px",
                            background: "#28b15a",
                            borderRadius: "50%",
                            color: "#fff",
                          }}
                        />
                        Karnataka sports ...
                      </Typography.Text>

                      <div className={CSS.divider_hrz}></div>
                      <LogoutOutlined />
                    </div>
                  </Col>
                </Row>
              </Col>
            </>
          ) : null}
        </Row>
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
            {!mobileView ? (
              <div className="cs-dis-flex cs-center cs-rm-5 cs-pointer">
                {!collapsed ? <LeftOutlined /> : <RightOutlined />}
              </div>
            ) : null}
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
          <Footer className="cs-tm-40">
            <div className={CSS.footer_container}>
              <Row gutter={[20, 20]}>
                <Col>
                  <Typography.Text
                    style={{ cursor: "pointer" }}
                    type="secondary"
                  >
                    Terms & conditions
                  </Typography.Text>
                </Col>
                <Col>
                  <Typography.Text
                    style={{ cursor: "pointer" }}
                    type="secondary"
                  >
                    Privacy policy
                  </Typography.Text>
                </Col>
                <Col>
                  <Typography.Text
                    style={{ cursor: "pointer" }}
                    type="secondary"
                  >
                    Report Fraud
                  </Typography.Text>
                </Col>
                <Col>
                  <Typography.Text
                    style={{ cursor: "pointer" }}
                    type="secondary"
                  >
                    Feedback
                  </Typography.Text>
                </Col>
              </Row>
            </div>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
