export function Main() {
    return (
        <>
            <main className='main'>
                <div className='header-main'><img className="user-banner" src="banner.jpg" alt="" /></div>
                <div className='user-wrap'>
                    <img className='user-avatar' src="avatar.jpg" alt="" />
                    <div>
                        <h1 className="user-name">Евгений</h1>
                        <ul className='user-info'>
                            <li><strong>День рождения:</strong> 1 нобяря</li>
                            <li><strong>Город:</strong> Орёл</li>
                            <li><strong>Образование:</strong>Бакалавр</li>
                            <li><strong>Веб-сайт:</strong> - </li>
                        </ul>
                    </div>
                </div>
                <div className='post-wrap'>
                    <label htmlFor="label-enter-post"> Мои посты</label>
                    <div className='enter-post' id="label-enter-post">
                        <textarea name="" id=""></textarea>
                        <button>Отправить</button>
                    </div>
                    <div className="public-post-wrap">
                        <img className="user-avatar-post" src="avatar.jpg" alt="" />
                        <div className='post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor provident maxime asperiores, libero culpa excepturi nulla, reprehenderit nisi unde perspiciatis, illo quo eveniet quidem est dignissimos ad nihil at.</div>
                    </div>
                </div>
            </main>
        </>
    )
}