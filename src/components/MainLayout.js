import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import { adminRoutes } from "../router";

const { Sider, Content } = Layout;

const routes = adminRoutes.filter((el) => el.isShow);

const MainLayout = ({ children, history }) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={routes[0].path}>
          {routes.map((route) => (
            <Menu.Item key={route.path} onClick={item=>history.push(item.key)} >{route.title}</Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: 'calc(100vh - 48px)',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(MainLayout);
