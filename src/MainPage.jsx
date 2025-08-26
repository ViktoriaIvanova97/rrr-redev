import "./App.css";

import { Routes, Route, NavLink, Navigate } from "react-router";
import { Components } from "./Components";
import { Props } from "./Props";
import { State } from "./State";
import { LifeCycle } from "./Lifecycle";
import { Events } from "./Events";
import { Key } from "./Key";
import { Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

function MainPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100%", background: "#C88E9D" }}>
      <Sider trigger={null} style={{ background: "#C88E9D" }}>
        <Menu
          style={{ height: "100vh", background: "#C88E9D" }}
          // theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: <NavLink to={"/mainPage/components"}>Components</NavLink>,
            },
            {
              key: "2",
              label: <NavLink to={"/mainPage/props"}>Props</NavLink>,
            },
            {
              key: "3",
              label: <NavLink to={"/mainPage/state"}>State</NavLink>,
            },
            {
              key: "4",
              label: <NavLink to={"/mainPage/lifecycle"}>Lifecycle</NavLink>,
            },
            {
              key: "5",
              label: <NavLink to={"/mainPage/events"}>Events</NavLink>,
            },
            {
              key: "6",
              label: <NavLink to={"/mainPage/key"}>Key</NavLink>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/mainPage/components" replace />} />
            <Route path="/components" element={<Components />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/lifecycle" element={<LifeCycle />} />
            <Route path="/events" element={<Events />} />
            <Route path="/key" element={<Key />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainPage;
