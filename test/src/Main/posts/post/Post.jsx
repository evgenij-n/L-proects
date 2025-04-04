import stylePost from "./Post.module.css";

export function Post(props) {

    return (
        <>
            <div className={stylePost.postWrap__post}>
                <img className={stylePost.postWrap__avatar} src="avatar.svg" alt="" />
                {props.message}
            </div>
        </>
    )
}