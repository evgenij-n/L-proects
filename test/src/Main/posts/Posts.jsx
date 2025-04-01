import stylePosts from "./Posts.module.css";

export function Posts() {
    return (
        <>
            <div className={stylePosts.postWrap}>
                <h2>Мои посты</h2>
                <div className={stylePosts.postWrap__enter__post}>
                    <textarea></textarea>
                    <button>Отправить</button>
                </div>
                <div className={stylePosts.postWrap__public}>
                    <img className={stylePosts.postWrap__avatar} src="avatar.svg" alt="" />
                    <div className={stylePosts.postWrap__post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor provident maxime asperiores, libero culpa excepturi nulla, reprehenderit nisi unde perspiciatis, illo quo eveniet quidem est dignissimos ad nihil at.</div>
                </div>
            </div>
        </>
    )
}