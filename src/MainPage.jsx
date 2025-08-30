import "./App.css";

import { Routes, Route, NavLink, Navigate } from "react-router";
import { Components } from "./Components";
import { Props } from "./Props";
import { State } from "./State";
import { LifeCycle } from "./LifeCycle";
import { Events } from "./Events";
import { Key } from "./Key";
import { Refs } from "./Refs";
import { Async } from "./Async";
import { VirtualDOM } from "./VirtualDOM";
import { Fragment } from "./Fragment";
import { Form } from "./Form";
import { ReactMemo } from "./ReactMemo";
import { UseEffect } from "./UseEffect";
import { UseMemo } from "./UseMemo";
import { ReactRouter } from "./ReactRouter";
import { Layout, Menu, theme } from "antd";
const { Sider, Content } = Layout;

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
            {
              key: "7",
              label: <NavLink to={"/mainPage/refs"}>Refs</NavLink>,
            },
            {
              key: "8",
              label: <NavLink to={"/mainPage/async"}>Async</NavLink>,
            },
            {
              key: "9",
              label: <NavLink to={"/mainPage/virtualDOM"}>VirtualDOM</NavLink>,
            },
            {
              key: "10",
              label: <NavLink to={"/mainPage/fragment"}>Fragment</NavLink>,
            },
            {
              key: "11",
              label: <NavLink to={"/mainPage/reactMemo"}>React.Memo</NavLink>,
            },
            {
              key: "12",
              label: <NavLink to={"/mainPage/useEffect"}>useEffect</NavLink>,
            },
            {
              key: "13",
              label: <NavLink to={"/mainPage/useMemo"}>useMemo</NavLink>,
            },
            {
              key: "14",
              label: <NavLink to={"/mainPage/reactRouter"}>Router</NavLink>,
            },
            {
              key: "15",
              label: <NavLink to={"/mainPage/form"}>Form</NavLink>,
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
            <Route
              path="/"
              element={<Navigate to="/mainPage/components" replace />}
            />
            <Route path="/components" element={<Components />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/lifecycle" element={<LifeCycle />} />
            <Route path="/events" element={<Events />} />
            <Route path="/key" element={<Key />} />
            <Route path="/refs" element={<Refs />} />
            <Route path="/async" element={<Async />} />
            <Route path="/virtualDOM" element={<VirtualDOM />} />
            <Route path="/fragment" element={<Fragment />} />
            <Route path="/reactMemo" element={<ReactMemo />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/reactRouter" element={<ReactRouter />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainPage;
