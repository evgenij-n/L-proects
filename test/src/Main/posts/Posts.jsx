import { Post } from "./post/Post";
import stylePosts from "./Posts.module.css";

export function Posts() {

    let PostData = [
        { id: 1, message: 'Lorem ipsumvo consequuntur odit tempora luptatibus laborum esse dolore, ullam, dolore, itaque odio? laborum esse dolore, itaque odio?' },
        { id: 2, message: 'Dignissimos sequi temporibus dolorem nisi! Inventore, eligendi consequuntur odit tempora eaque natus ex voluptatibus laborum esse dolore, itaque odio?' },
    ]

    return (
        <>
            <div className={stylePosts.postWrap}>
                <h2>Мои посты</h2>
                <div className={stylePosts.postWrap__enter__post}>
                    <textarea></textarea>
                    <button>Отправить</button>
                </div>
                <Post message={PostData[0].message} id={PostData[0].id}/>
                <Post message={PostData[1].message} id={PostData[1].id}/>
            </div>
        </>
    )
}