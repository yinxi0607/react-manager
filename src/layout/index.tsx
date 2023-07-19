import React, {useEffect} from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {Layout, Menu, theme, Watermark} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const targetNode = document.getElementById("content") as HTMLDivElement
    const observer = new MutationObserver(function (mutationsList, observer) {
      console.log(mutationsList, observer);
      console.log('changed');

      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');

          // 在添加span元素之前断开观察者
          observer.disconnect();

          const span = document.createElement('span');
          span.innerText = 'hello React';
          targetNode.appendChild(span);

          // 在添加span元素后重新连接观察者
          observer.observe(targetNode, {
            attributes: true,
            childList: true,
            subtree: true,
          });
        }
      }
    });
    observer.observe(targetNode, { attributes: true, childList: true, subtree: true })
    return () => {
      observer.disconnect()
    }
  },[])

  return (
    <Watermark content="react">
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
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }} id="content">
            <span>
              content
            </span>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </Watermark>
  );

};

export default App;
