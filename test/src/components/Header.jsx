import styleHeader from  "../css/Header.module.css";

export function Header(){
    return (
        <>
        <header className={styleHeader.header}>
          <img className={styleHeader.header__logo} src="./src/assets/react.svg" alt="иконка" />
        </header>
        </>
    )
}