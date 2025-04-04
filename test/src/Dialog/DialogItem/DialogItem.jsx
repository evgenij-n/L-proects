import styleDialog from "./../Dialog.module.css";
import { NavLink } from "react-router-dom";

export function DialogItem(props) {
    return (
        <>
            <li className={styleDialog.user}>
                <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
            </li>
        </>
    )
}