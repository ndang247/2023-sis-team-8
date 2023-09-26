import React from "react";
import { Layout, theme } from "antd";
const { Header } = Layout;

export const Banner = ({ colorBgContainer }) => {
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    />
  );
};
