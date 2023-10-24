import React from "react";
import { UserChatLayout, Sidebar, Banner, Bottom, FeedbackSlider } from "@components";
import { Layout, theme } from "antd";
const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <Banner props={colorBgContainer} />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <UserChatLayout />
          <FeedbackSlider min={0} max={10} />
        </Content>
        <Bottom />
      </Layout>
    </Layout>
  );
};
export default App;
