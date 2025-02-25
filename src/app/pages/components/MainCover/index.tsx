import Image from "next/image";
import styles from "./index.module.scss"

const MainCover = (): React.ReactElement => {

    return (
        <div className={styles.main}>
            <div className={styles.main_title}>D</div>
            <div><Image src={"./shared/title_cover.png"} alt={""} width={300} height={400} className={styles.main_img} /></div>
            <div className={styles.main_title}>K</div>
        </div>
    );
}

export default MainCover;
