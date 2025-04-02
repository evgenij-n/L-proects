import styleProfile from "./Profile.module.css";


export function Profile() {
    return (
        <>
            <img className={styleProfile.user__banner} src="banner.svg" alt="" />
            <div className={styleProfile.user__wrap}>
                <img className={styleProfile.user__avatar} src="avatar.svg" alt="" />
                <div>
                    <h1 className={styleProfile.user__name}>Evgenij</h1>
                    <ul className={styleProfile.user__info}>
                        <li className={styleProfile.user__info__list}><strong>Birthday:</strong> November 1</li>
                        <li className={styleProfile.user__info__list}><strong>City:</strong> Orel</li>
                        <li className={styleProfile.user__info__list}><strong>Education:</strong> Bachelor</li>
                        <li className={styleProfile.user__info__list}><strong>Website:</strong> - </li>
                    </ul>
                </div>
            </div>
        </>
    )
}