"use client";

import styles from "./index.module.scss";
import useSafeLinkOpener from "@/src/shared/hooks/useSafeLinkOpener";

const GuestChat = (): React.ReactElement => {
    const url = "https://t.me/+rMFbrJVGpEZjNDVi";

    const safeOpen = useSafeLinkOpener();
    const openLinkClick = (url: string) => {
        safeOpen(url, {
            target: "_blank",
            fallbackStrategy: "location",
        });
    };

    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ЧАТ ДЛЯ ГОСТЕЙ</div>
            <div className={styles.main_title_sub}>
                <div className={styles.main_title_sub_center}>Дорогие гости!</div> Для вашего
                удобства мы создали общий чат, где вы сможете делиться своими фотографиями,
                впечатлениями и теплыми моментами нашего праздника. Присоединяйтесь, чтобы сохранить
                воспоминания вместе!
            </div>

            <div className={styles.main_container} onClick={() => openLinkClick(url)}>
                ВСТУПИТЬ В ЧАТ
            </div>
        </div>
    );
};

export default GuestChat;
