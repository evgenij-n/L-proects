import styleMain from "../css/Main.module.css";

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
                <div className={styleMain.postWrap}>
                    <h2>Мои посты</h2>
                    <div className={styleMain.postWrap__enter__post}>
                        <textarea></textarea>
                        <button>Отправить</button>
                    </div>
                    <div className={styleMain.postWrap__public}>
                        <img className={styleMain.postWrap__avatar} src="avatar.svg" alt="" />
                        <div className={styleMain.postWrap__post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor provident maxime asperiores, libero culpa excepturi nulla, reprehenderit nisi unde perspiciatis, illo quo eveniet quidem est dignissimos ad nihil at.</div>
                    </div>
                </div>
            </main>
        </>
    )
}