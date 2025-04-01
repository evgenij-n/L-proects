export function Main() {
    return (
        <>
            <main className='user'>
                <img className="user__banner" src="banner.jpg" alt="" />
                <div className='user__wrap'>
                    <img className='user__avatar' src="avatar.jpg" alt="" />
                    <div>
                        <h1 className="user__name">Евгений</h1>
                        <ul className='user__info'>
                            <li><strong>День рождения:</strong> 1 нобяря</li>
                            <li><strong>Город:</strong> Орёл</li>
                            <li><strong>Образование:</strong>Бакалавр</li>
                            <li><strong>Веб-сайт:</strong> - </li>
                        </ul>
                    </div>
                </div>
                <div className='postWrap'>
                    <label htmlFor="postWrap__label__textarea"> Мои посты</label>
                    <div className='enter-post' id="label-enter-post">
                        <textarea></textarea>
                        <button>Отправить</button>
                    </div>
                    <div className="postWrap__public">
                        <img className="postWrap__avatar" src="avatar.jpg" alt="" />
                        <div className='postWrap__post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor provident maxime asperiores, libero culpa excepturi nulla, reprehenderit nisi unde perspiciatis, illo quo eveniet quidem est dignissimos ad nihil at.</div>
                    </div>
                </div>
            </main>
        </>
    )
}