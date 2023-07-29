import Styles from './css/Fv.module.css';

export const Fv = (props: { imgPath: string, imgName: string }) => {
    return (
        <div className={Styles.fv}>
            <img
                className={Styles.fvImage}
                src={`/img/${props.imgPath}`}
                alt={props.imgName}
                width={640}
                height={428}
            />
        </div>
    );
}