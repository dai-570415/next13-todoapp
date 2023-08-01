import Styles from './css/Header.module.css';
import { BackButton } from '../BackButton/BackButton';

export const Header = (props: { pageTitle:string }) => {
    return (
        <header className={Styles.header}>
            <BackButton />
            <h1>{props.pageTitle}</h1>
        </header>
    );
}