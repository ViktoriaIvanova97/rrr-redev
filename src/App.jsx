import "./App.css";
import { Routes, Route, NavLink, Navigate } from "react-router";
import MainPage from "./MainPage";
import { Home } from "./Home";
import { ButtonTheme } from "./ButtonTheme";
import { ThemeProvider } from "./ThemeProvider"; 

function App() {
  return (
    <ThemeProvider>
      <nav>
        <ButtonTheme />
        <NavLink to={"/home"} style={{ color: "#121212" }}>
         <p>ДОМОЙ</p>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainPage/*" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
