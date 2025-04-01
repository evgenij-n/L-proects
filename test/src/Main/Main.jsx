import styleMain from "./Main.module.css";
import { Posts } from "./posts/Posts";

export function Main() {
    return (
        <>
            <main className={styleMain.user}>
                <img className={styleMain.user__banner} src="banner.svg" alt="" />
                <div className={styleMain.user__wrap}>
                    <img className={styleMain.user__avatar} src="avatar.svg" alt="" />
                    <div>
                        <h1 className={styleMain.user__name}>Евгений</h1>
                        <ul className={styleMain.user__info}>
                            <li className={styleMain.user__info__list}><strong>День рождения:</strong> 1 нобяря</li>
                            <li className={styleMain.user__info__list}><strong>Город:</strong> Орёл</li>
                            <li className={styleMain.user__info__list}><strong>Образование:</strong>Бакалавр</li>
                            <li className={styleMain.user__info__list}><strong>Веб-сайт:</strong> - </li>
                        </ul>
                    </div>
                </div>
                <Posts />
            </main>
        </>
    )
}