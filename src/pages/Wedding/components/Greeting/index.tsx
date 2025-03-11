"use client";

import ImageCustom from "@/src/shared/components/ImageCustom";
import styles from "./index.module.scss";

const MainCover = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>Дорогие гости!</div>
            <div className={styles.main_title_sub}>
                Приглашаем вас разделить с нами радость особенного дня - нашей свадьбы!
            </div>
            <div className={styles.main_photo_container}>
                <div className={styles.main_photo_container_1}>
                    <ImageCustom src="./shared/images/greeting_1.png" />
                </div>
                <div className={styles.main_photo_container_2}>
                    <ImageCustom src="./shared/images/greeting_2.png" />
                </div>
            </div>
        </div>
    );
};

export default MainCover;
