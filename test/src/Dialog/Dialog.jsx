import styleDialog from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
    return (
        <>
            <li className={styleDialog.user}>
                <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
            </li>
        </>
    )
}

function Message(props) {
    return (
        <>
            <div>{props.message}</div>
        </>
    )
}

export function Dialog() {

    let dialogsData = [
        { id: 1, name: 'Evgenij' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Marina' },
        { id: 4, name: 'Valeria' },
        { id: 5, name: 'Vladislav' },
    ]

    let messageData = [
        { id: 1, message: 'Lorem ipsum ullam, dolore, itaque odio?' },
        { id: 2, message: 'Dignissimos sequi temporibus dolorem nisi! Inventore, eligendi consequuntur odit tempora eaque natus ex voluptatibus laborum esse dolore, itaque odio?' },
        { id: 3, message: 'Lorem ipsum ullam, reiciendis repudiandae? Iusto voluptas quisquam nam beatae quaerat.' },
    ]

    return (
        <>
            <div className={styleDialog.dialog}>
                <div className={styleDialog.dialog__left}>
                    <ul className={styleDialog.dialog__user}>
                        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    </ul>
                </div>
                <div className={styleDialog.dialog__right}>
                    <Message message={messageData[0].message} id={messageData[0].id} />
                    <Message message={messageData[1].message} id={messageData[1].id} />
                    <Message message={messageData[2].message} id={messageData[2].id} />
                </div>
            </div>
        </>
    )
}