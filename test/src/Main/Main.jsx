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
                        <h1 className={styleMain.user__name}>Evgenij</h1>
                        <ul className={styleMain.user__info}>
                            <li className={styleMain.user__info__list}><strong>Birthday:</strong> November 1</li>
                            <li className={styleMain.user__info__list}><strong>City:</strong> Orel</li>
                            <li className={styleMain.user__info__list}><strong>Education:</strong> Bachelor</li>
                            <li className={styleMain.user__info__list}><strong>Website:</strong> - </li>
                        </ul>
                    </div>
                </div>
                <Posts />
            </main>
        </>
    )
}