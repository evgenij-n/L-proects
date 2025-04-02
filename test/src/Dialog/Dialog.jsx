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

function Message(props){
    return(
        <>
            <div>{props.message}</div>
        </>
    )
}

export function Dialog(){
    return (
        <>
        <div className={styleDialog.dialog}>
            <div className={styleDialog.dialog__left}>
                <ul className={styleDialog.dialog__user}>
                    <DialogItem name="Evgenij" id="1"/>
                    <DialogItem name="Andrey" id="2"/>
                    <DialogItem name="Marina" id="3"/>
                    <DialogItem name="Valeria" id="4"/>
                    <DialogItem name="Vladislav" id="5"/>
                </ul>
            </div>
            <div className={styleDialog.dialog__right}>
                <Message message="Lorem ipsum ullam, dolore, itaque odio?" />
                <div>Dignissimos sequi temporibus dolorem nisi! Inventore, eligendi consequuntur odit tempora eaque natus ex voluptatibus laborum esse dolore, itaque odio?</div>
                <div>Lorem ipsum ullam, reiciendis repudiandae? Iusto voluptas quisquam nam beatae quaerat.</div>
            </div>
        </div>
        </>
    )
}