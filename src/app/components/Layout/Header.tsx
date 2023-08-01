import Styles from './css/Header.module.css';

export const Header = (props: { pageTitle:string }) => {
    return (
        <header className={Styles.header}>
            <h1>{props.pageTitle}</h1>
        </header>
    );
}