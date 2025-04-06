"use client";

import ItemProgramDay from "./components/ItemProgramDay";
import styles from "./index.module.scss";

const Place = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ПРОГРАММА ДНЯ</div>
            <div className={styles.main_container}>
                <ItemProgramDay time="12:20">ЗАГС</ItemProgramDay>
                <ItemProgramDay time="16:00">
                    <div className={styles.main_container_item_text_s}>СБОР ГОСТЕЙ</div>
                </ItemProgramDay>
                <ItemProgramDay time="17:00">БАНКЕТ</ItemProgramDay>
                <ItemProgramDay time="23:00">
                    <div className={styles.main_container_item_text_m}>
                        ЗАВЕРШЕНИЕ
                        <br />
                        ВЕЧЕРА
                    </div>
                </ItemProgramDay>
                {/* <div className={styles.main_container_item}>
                    <div className={styles.main_container_item_time}>12:20</div>
                    <div className={styles.main_container_item_text}>ЗАГС</div>
                </div>
                <div className={styles.main_container_item}>
                    <div className={styles.main_container_item_time}>16:00</div>
                    <div className={styles.main_container_item_text_s}>СБОР ГОСТЕЙ</div>
                </div>
                <div className={styles.main_container_item}>
                    <div className={styles.main_container_item_time}>17:00</div>
                    <div className={styles.main_container_item_text}>БАНКЕТ</div>
                </div>
                <div className={styles.main_container_item}>
                    <div className={styles.main_container_item_time}>23:00</div>
                    <div className={styles.main_container_item_text_m}>
                        ЗАВЕРШЕНИЕ
                        <br />
                        ВЕЧЕРА
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Place;
