import stylePost from "./Post.module.css";

export function Post(props) {

    return (
        <>
            <div className={stylePost.postWrap__public}>
                <img className={stylePost.postWrap__avatar} src="avatar.svg" alt="" />
                <div className={stylePost.postWrap__post}>{props.message}</div>
                <div>❤️ {props.like}</div>
            </div>
        </>
    )
}