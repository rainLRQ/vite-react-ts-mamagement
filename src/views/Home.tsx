import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import {Outlet} from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
import MainNav from "@/components/MainNav";

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/*侧边栏*/}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <MainNav/>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <Header style={{ padding: 0, background: colorBgContainer }} >
          {/*面包蟹*/}
          <Breadcrumb style={{ marginLeft: '16px', lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 内容 */}
        <Content style={{ margin: '16px 16px 0' }}>
          {/* 嵌套路由出口仍然要使用Outlet组件 窗口部分 */}
          <Outlet/>
        </Content>
        {/* footer */}
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;
