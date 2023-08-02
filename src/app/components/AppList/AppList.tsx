import Link from 'next/link';
import Styles from './css/AppList.module.css';
import { ImArrowRight2 } from "react-icons/im";

export const AppList = () => {
    return (
        <ul className={Styles.appList}>
            <li><Link href="/todo">タスクアプリ<span><ImArrowRight2 /></span></Link></li>
        </ul>
    );
}