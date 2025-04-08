"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";
import useMediaQuery from "@/src/shared/hooks/useMediaQuery";

const Confirmation = (): React.ReactElement => {
    const is1024px = useMediaQuery("(min-width: 1024px)");
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ПОДТВЕРЖДЕНИЕ</div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Дорогие гости! Просим вас подтвердить свое присутствие на нашем празднике до 1
                    июля 2025 года. Это поможет нам лучше организовать мероприятие и сделать его
                    максимально комфортным для всех. 
                </SmoothRectangleShell>
            </div>
        </div>
    );
};

export default Confirmation;
