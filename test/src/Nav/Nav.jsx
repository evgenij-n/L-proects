import { NavLink } from "react-router-dom";
import styleNav from "./Nav.module.css";

export function Nav(){
    return (
        <>
        <nav className={styleNav.nav}>
          <ul>
            <li className={styleNav.nav__item}>
              <NavLink to="/main" className={({ isActive }) =>isActive ? `${styleNav.nav__item} ${styleNav.activeLink}` : styleNav.nav__item}
              >Profile</NavLink>
              </li>
            <li className={styleNav.nav__item}>
              <NavLink to="/dialog" className={({ isActive }) =>isActive ? `${styleNav.nav__item} ${styleNav.activeLink}` : styleNav.nav__item}>Messages</NavLink>
              </li>
            <li className={styleNav.nav__item}>
              <NavLink to="/news" className={({ isActive }) =>isActive ? `${styleNav.nav__item} ${styleNav.activeLink}` : styleNav.nav__item}>News</NavLink>
              </li>
            <li className={styleNav.nav__item}>
              <NavLink to="/music" className={({ isActive }) =>isActive ? `${styleNav.nav__item} ${styleNav.activeLink}` : styleNav.nav__item}>Music</NavLink>
              </li>
            <li className={styleNav.nav__item}>
              <NavLink to="/settings" className={({ isActive }) =>isActive ? `${styleNav.nav__item} ${styleNav.activeLink}` : styleNav.nav__item}>Settings</NavLink>
              </li>
          </ul>
        </nav>
        </>
    )
}