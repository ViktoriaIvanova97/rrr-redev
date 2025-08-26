import "./App.css";
import { Routes, Route, NavLink, Navigate } from "react-router";
import MainPage from "./MainPage";
import { Home } from "./Home";
import { ButtonTheme } from "./ButtonTheme";
function App() {
  return (
    <>
      <nav className="navStyle">
        <ButtonTheme />
        <NavLink to={"/home"} style={{color:'#121212'}}>ДОМОЙ</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainPage/*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
