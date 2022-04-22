import React from "react";
import "./App.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  MenuProps,
  SubMenuProps,
  Typography,
  Button,
  Tag,
  Divider,
  Space,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  KeyOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = MenuProps;
// type MenuItem = any; // Required<MenuProps>["items"][number];

type SubMenuType = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: SubMenuType[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: SubMenuType[]
): SubMenuType {
  return {
    key,
    icon,
    children,
    label,
  } as SubMenuType;
}

const items: SubMenuType[] = [
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("User", "sub3", <UserOutlined />, [
    getItem("Tom", "9"),
    getItem("Bill", "10"),
    getItem("Alex", "11"),
  ]),
  getItem("User", "sub4", <UserOutlined />, [
    getItem("Tom", "12"),
    getItem("Bill", "13"),
    getItem("Alex", "14"),
  ]),
];

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const defaultSelectKeys = ["1.0"];
  const [selectedKeys, setSelectedKeys] = React.useState(defaultSelectKeys)
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={defaultSelectKeys}
          selectedKeys={selectedKeys}
          onSelect={(ev) => {setSelectedKeys(ev.selectedKeys)}}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}></Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0px"}}></Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
