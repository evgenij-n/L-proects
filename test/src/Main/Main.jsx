import styleMain from "./Main.module.css";
import { Posts } from "./posts/Posts";
import { Profile } from "./Profile/Profile";

export function Main() {
    return (
        <>
            <main className='main'>
                <Profile />
                <Posts />
            </main>
        </>
    )
}