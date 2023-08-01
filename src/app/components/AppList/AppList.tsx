import Link from 'next/link';
import Styles from './css/AppList.module.css';

export const AppList = () => {
    return (
        <ul className={Styles.appList}>
            <li><Link href="/todo">タスクアプリ<span>→</span></Link></li>
        </ul>
    );
}