import React, { useState } from "react";
import {
  ContainerOutlined,
  UserOutlined,
  SearchOutlined,
  BarsOutlined,
  PhoneOutlined,
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
       <div className="demo-logo-vertical">
        <img src="uts-logo.png" alt="Logo" style={{ width: '60%', height: 'auto', paddingLeft: '10px', paddingTop: '15px' }} />
      </div>
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
          <Menu.Item key="1"> <BarsOutlined /> Convo 1</Menu.Item>
          <Menu.Item key="2"> <BarsOutlined /> Convo 2</Menu.Item>
          <Menu.Item key="3"> <BarsOutlined /> Convo 3</Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<PhoneOutlined />}>
          Contact Us
        </Menu.Item>
      </Menu>
      <div style={{ textAlign: 'center', color: 'white', paddingLeft: '10px', paddingRight: '10px', paddingTop: '25px', paddingBottom: '25px' }}>To save this conversation, please login</div>
      <Menu>
        <br></br>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Login
        </Menu.Item>
      </Menu>
      <div style={{ textAlign: 'center', color: 'white', paddingLeft: '10px', paddingRight: '10px', paddingTop: '25px' }}>To speak to someone, please call 1300 ASK UTS</div>
    </Sider>
  );
};
