"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";

const Tips = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ПОДСКАЗКИ:</div>
            <div className={styles.main_title_sub_left}>ПОДАРКИ</div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell style={{ margin: "5px 10px 0 30px", maxWidth: "550px" }}>
                    Мы будем признательны, если вы поможете нам осуществить мечту о путешествии,
                    подарив ваши пожелания в конверте.
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_title_sub_right} style={{ marginTop: "24px" }}>
                ДЕТАЛИ
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell style={{ margin: "5px 10px 0 30px", maxWidth: "550px" }}>
                    Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь
                    поцелуй - знак выражения чувств, он не может быть по заказу.
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "550px" }}>
                    Наша свадьба — это наш маленький мир, и мы хотим, чтобы он остался таким же
                    уютным и личным. Пожалуйста, не делитесь фотографиями в соцсетях без нашего
                    ведома. Давайте сохраним этот день для себя, а потом, возможно, откроем его миру
                    вместе. Спасибо за понимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "550px" }}>
                    Мы хотели бы, чтобы вы наслаждались праздником! Просим вас в день нашей свадьбы
                    не использовать мобильные телефоны, у нас большая фото и видео команда, они все
                    заснимут.
                </SmoothRectangleShell>
            </div>
        </div>
    );
};

export default Tips;
