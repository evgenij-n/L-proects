import styleDialog from "./Dialog.module.css";
import { DialogItem } from "./DialogItem/DialogItem.jsx"
import { Message } from "./Message/Message"

export function Dialog() {

    let dialogsData = [
        { id: 1, name: 'Evgenij' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Marina' },
        { id: 4, name: 'Valeria' },
        { id: 5, name: 'Vladislav' },
    ];

    let dialogEl = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messageData = [
        { id: 1, message: 'Lorem ipsum ullam, dolore, itaque odio?' },
        { id: 2, message: 'Dignissimos sequi temporibus dolorem nisi! Inventore, eligendi consequuntur odit tempora eaque natus ex voluptatibus laborum esse dolore, itaque odio?' },
        { id: 3, message: 'Lorem ipsum ullam, reiciendis repudiandae? Iusto voluptas quisquam nam beatae quaerat.' },
    ];

    let messageEl = messageData.map(message => <Message message={message.message} id={message.id} />)

    return (
        <>
            <div className={styleDialog.dialog}>
                <div className={styleDialog.dialog__left}>
                    <ul className={styleDialog.dialog__user}>
                        {dialogEl}
                    </ul>
                </div>
                <div className={styleDialog.dialog__right}>
                    {messageEl}
                </div>
            </div>
        </>
    )
}