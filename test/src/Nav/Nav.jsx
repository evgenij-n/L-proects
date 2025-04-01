import styleNav from "./Nav.module.css";

export function Nav(){
    return (
        <>
        <nav className={styleNav.nav}>
          <ul>
            <li className={styleNav.nav__item}><a href="#">Profile</a></li>
            <li className={styleNav.nav__item}><a href="#">Messages</a></li>
            <li className={styleNav.nav__item}><a href="#">News</a></li>
            <li className={styleNav.nav__item}><a href="#">Music</a></li>
            <li className={styleNav.nav__item}><a href="#">Settings</a></li>
          </ul>
        </nav>
        </>
    )
}