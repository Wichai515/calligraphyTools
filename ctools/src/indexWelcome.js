import React from 'react';
import { Layout, Menu } from 'antd';
import {
  BookOutlined,
  SolutionOutlined,
  CopyOutlined,
  ReadOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const IndexWelcome = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<BookOutlined />}>
            字典
          </Menu.Item>
          <Menu.Item key="2" icon={<SolutionOutlined />}>
            字帖
          </Menu.Item>
          <Menu.Item key="3" icon={<CopyOutlined />}>
            集字
          </Menu.Item>
          <Menu.Item key="4" icon={<ReadOutlined />}>
            识字
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Welcome to our website!</h1>
          {/* 在这里添加主要内容 */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>版权所有 © 2024</Footer>
    </Layout>
  );
};

export default IndexWelcome;
