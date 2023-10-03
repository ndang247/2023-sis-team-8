import React, { useState } from "react";
import {
  ContainerOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
        setCollapsed(collapsed);
      }}
      style={{ backgroundColor: "#123286" }}
    >
      <div className="demo-logo-vertical" />
      <Input
        prefix={<SearchOutlined style={{ color: 'rgba(118, 118, 118, 0.5)' }} />} 
        placeholder="Search"
        style={{ margin: '16px', width: '80%', color: 'rgba(118, 118, 118, 0.5)', alignSelf: 'center' }}
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        style={{ backgroundColor: "#123286", color: 'white' }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <ContainerOutlined />
              <span>My Questions</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Contact Us
        </Menu.Item>
      </Menu>
      <div style={{ textAlign: 'center', color: 'white', paddingTop: '25px' }}>To speak to someone, please call 1300 ASK UTS</div>
    </Sider>
  );
};
