import styleNav from "../css/Nav.module.css";

export function Nav(){
    return (
        <>
        <nav className={styleNav.nav}>
          <ul>
            <li className={styleNav.nav__item}><a href="#">Профиль</a></li>
            <li className={styleNav.nav__item}><a href="#">Сообщения</a></li>
            <li className={styleNav.nav__item}><a href="#">Новости</a></li>
            <li className={styleNav.nav__item}><a href="#">Музыка</a></li>
            <li className={styleNav.nav__item}><a href="#">Настройки</a></li>
          </ul>
        </nav>
        </>
    )
}