import Link from 'next/link';

// 通常
export const CommonLink = (props: { labelName:string, dir: string }) => {
    return <Link href={props.dir}>{props.labelName}</Link>;
}

// 戻るリンク
export const PrevLink = (props: { labelName:string, dir: string }) => {
    return <Link href={props.dir}>← {props.labelName}</Link>;
}

// 進むリンク
export const NextLink = (props: { labelName:string, dir: string }) => {
    return <Link href={props.dir}>{props.labelName} →</Link>;
}