import stylePost from "./Post.module.css";

export function Post() {
    return (
        <>
            <div className={stylePost.postWrap__public}>
                <img className={stylePost.postWrap__avatar} src="avatar.svg" alt="" />
                <div className={stylePost.postWrap__post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor provident maxime asperiores, libero culpa excepturi nulla, reprehenderit nisi unde perspiciatis, illo quo eveniet quidem est dignissimos ad nihil at.</div>
            </div>
        </>
    )
}