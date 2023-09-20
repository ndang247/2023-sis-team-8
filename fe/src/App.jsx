import React from 'react';
import { FormOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { UserChatLayout } from './components';
const { Header, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[FormOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <UserChatLayout>
        </UserChatLayout>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ASK UTS ©2023 MAKE UTS BETTER
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;