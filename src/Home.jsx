
import { NavLink } from "react-router";

export const Home = () => {
  return (
    <>
      <div className="homeMainBlock">
        <h1>Шпаргалка по React</h1>
        <p>
          Официальная документация:
          <a href=""> React.dev</a>
        </p>
        <NavLink to={"/mainPage"} className="homeButton">
          ТЕМЫ
        </NavLink>
      </div>
    </>
  );
};
