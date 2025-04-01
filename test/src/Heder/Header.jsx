import styleHeader from  "./Header.module.css";

export function Header(){
    return (
        <>
        <header className={styleHeader.header}>
          <img className={styleHeader.header__logo} src="react.svg" alt="иконка" />
        </header>
        </>
    )
}