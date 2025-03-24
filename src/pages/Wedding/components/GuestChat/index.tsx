"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";

const GuestChat = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ЧАТ ДЛЯ ГОСТЕЙ</div>
            <div className={styles.main_title_sub}>
                <div className={styles.main_title_sub_center}>Дорогие гости!</div> Для вашего
                удобства мы создали общий чат, где вы сможете делиться своими фотографиями,
                впечатлениями и теплыми моментами нашего праздника. Присоединяйтесь, чтобы сохранить
                воспоминания вместе!
            </div>

            <div className={styles.main_container}>
                <SmoothRectangleShell style={{ borderRadius: "100px" }}>
                    <div className={styles.main_container_text}>ВСТУПИТЬ В ЧАТ</div>
                </SmoothRectangleShell>
            </div>
        </div>
    );
};

export default GuestChat;
