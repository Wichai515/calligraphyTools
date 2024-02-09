import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  ReadOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BlogHomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            主页
          </Menu.Item>
          <Menu.Item key="2" icon={<ReadOutlined />}>
            文章
          </Menu.Item>
          <SubMenu key="sub1" icon={<TagOutlined />} title="标签">
            <Menu.Item key="3">标签1</Menu.Item>
            <Menu.Item key="4">标签2</Menu.Item>
            <Menu.Item key="5">标签3</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<UserOutlined />}>
            关于
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>文章</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* 这里放置博客文章列表 */}
            <h1>欢迎访问博客主页</h1>
            <p>这里是一些博客文章的简介或列表</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>博客 ©2024 Created by You</Footer>
      </Layout>
    </Layout>
  );
};

export default BlogHomePage;
