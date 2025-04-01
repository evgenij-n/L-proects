import styleNav from "./Nav.module.css";

export function Nav(){
    return (
        <>
        <nav className={styleNav.nav}>
          <ul>
            <li className={styleNav.nav__item}><a href="/main">Profile</a></li>
            <li className={styleNav.nav__item}><a href="/dialog">Messages</a></li>
            <li className={styleNav.nav__item}><a href="/news">News</a></li>
            <li className={styleNav.nav__item}><a href="/music">Music</a></li>
            <li className={styleNav.nav__item}><a href="/settings">Settings</a></li>
          </ul>
        </nav>
        </>
    )
}