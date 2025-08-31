import "./App.css";
import { useContext } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router";
import { ThemeContext } from "./ThemeContext"; 

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

import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;

function MainPage() {
  const { theme } = useContext(ThemeContext); 

  return (
    <Layout className={theme === "light" ? "light-theme" : "dark-theme"} style={{ height: "100%" }}>
      <Sider trigger={null}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: <NavLink to={"/mainPage/components"}>Components</NavLink> },
            { key: "2", label: <NavLink to={"/mainPage/props"}>Props</NavLink> },
            { key: "3", label: <NavLink to={"/mainPage/state"}>State</NavLink> },
            { key: "4", label: <NavLink to={"/mainPage/lifecycle"}>Lifecycle</NavLink> },
            { key: "5", label: <NavLink to={"/mainPage/events"}>Events</NavLink> },
            { key: "6", label: <NavLink to={"/mainPage/key"}>Key</NavLink> },
            { key: "7", label: <NavLink to={"/mainPage/refs"}>Refs</NavLink> },
            { key: "8", label: <NavLink to={"/mainPage/async"}>Async</NavLink> },
            { key: "9", label: <NavLink to={"/mainPage/virtualDOM"}>VirtualDOM</NavLink> },
            { key: "10", label: <NavLink to={"/mainPage/fragment"}>Fragment</NavLink> },
            { key: "11", label: <NavLink to={"/mainPage/reactMemo"}>React.Memo</NavLink> },
            { key: "12", label: <NavLink to={"/mainPage/useEffect"}>useEffect</NavLink> },
            { key: "13", label: <NavLink to={"/mainPage/useMemo"}>useMemo</NavLink> },
            { key: "14", label: <NavLink to={"/mainPage/reactRouter"}>Router</NavLink> },
            { key: "15", label: <NavLink to={"/mainPage/form"}>Form</NavLink> },
          ]}
        />
      </Sider>

      <Layout>
        <Content className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/mainPage/components" replace />} />
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
