
import { NavLink } from "react-router";

export const Home = () => {
  return (
    <>
      <div className="homeMainBlock ">
        <h1>Шпаргалка по React</h1>
        <p>
          Официальная документация:
          <a href="https://react.dev" target='_blank'> React.dev</a>
        </p>
        <NavLink to={"/mainPage"} className="homeButton">
         <p>ТЕМЫ</p> 
        </NavLink>
      </div>
    </>
  );
};
