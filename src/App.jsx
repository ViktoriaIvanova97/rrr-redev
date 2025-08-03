import "./App.css";
import React from "react";
import { useContext } from "react";
import { ControlsPanel } from "./ControlsPanel";
import { Header } from "./Header";
import { UserProfile } from "./UserProfile";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme theme--${theme}`}>
      <ControlsPanel />
      <Header />
      <UserProfile />
    </div>
  );
}

export default App;
