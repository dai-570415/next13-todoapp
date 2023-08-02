'use client';
 
import { useRouter, usePathname } from 'next/navigation';
import Styles from './css/BackButton.module.css';
import { ImArrowLeft2 } from "react-icons/im";
 
export const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <div className={Styles.backBtn}>
            {pathname !== '/' && (
                <button 
                    type="button" 
                    onClick={() => router.push('/')}
                ><ImArrowLeft2 /></button>
            )}
        </div>
    );
}