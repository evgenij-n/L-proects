import { Post } from "./post/Post";
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
                <Post message='Doloribus dolor provident maxime asperiores, libero culpa excepturi nulla.'/>
                <Post message='Libero culpa excepturi nulla, reprehenderit nisi unde perspiciatis, illo quo eveniet quidem est dignissimos ad nihil at.'/>
            </div>
        </>
    )
}