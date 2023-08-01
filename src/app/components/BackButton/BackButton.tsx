'use client';
 
import { useRouter, usePathname } from 'next/navigation';
import Styles from './css/BackButton.module.css';
 
export const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <div className={Styles.backBtn}>
            {pathname !== '/' && (
                <button 
                    type="button" 
                    onClick={() => router.push('/')}
                >←</button>
            )}
        </div>
    );
}