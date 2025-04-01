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
                <Post />
            </div>
        </>
    )
}