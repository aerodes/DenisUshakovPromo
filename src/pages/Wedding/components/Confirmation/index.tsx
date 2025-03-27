"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";

const Confirmation = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ПОДТВЕРЖДЕНИЕ</div>
            <div className={styles.main_container}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 10px" }}>
                    Дорогие гости! Просим вас подтвердить свое присутствие на нашем празднике до 1
                    июля 2025 года. Это поможет нам лучше организовать мероприятие и сделать его
                    максимально комфортным для всех. 
                </SmoothRectangleShell>
            </div>
        </div>
    );
};

export default Confirmation;
