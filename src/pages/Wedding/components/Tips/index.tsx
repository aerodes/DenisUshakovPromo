"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";
import { useRef } from "react";
import { useOnScreenEffect } from "@/src/shared/hooks/useOnScreenEffect";
import useMediaQuery from "@/src/shared/hooks/useMediaQuery";

const Tips = ({ onFinish = () => null }: { onFinish?: () => void }): React.ReactElement => {
    const is1024px = useMediaQuery("(min-width: 1024px)");
    const refFinish = useRef(null);
    useOnScreenEffect(() => {
        onFinish();
    }, refFinish);

    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ПОДСКАЗКИ:</div>
            <div className={styles.main_title_sub_right}>ПОДАРКИ</div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Мы будем признательны, если вы поможете нам осуществить мечту о путешествии,
                    подарив ваши пожелания в конверте.
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_title_sub_left} style={{ marginTop: "24px" }}>
                ДЕТАЛИ
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Будем благодарны, если Вы воздержитесь от криков «Горько» на празднике, ведь
                    поцелуй - знак выражения чувств, он не может быть по заказу.
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Наша свадьба — это наш маленький мир, и мы хотим, чтобы он остался таким же
                    уютным и личным. Пожалуйста, не делитесь фотографиями в соцсетях без нашего
                    ведома. Давайте сохраним этот день для себя, а потом, возможно, откроем его миру
                    вместе. Спасибо за понимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell
                    onFinish={() => onFinish()}
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Мы хотели бы, чтобы вы наслаждались праздником! Просим вас в день нашей свадьбы
                    не использовать мобильные телефоны, у нас большая фото и видео команда, они все
                    заснимут.
                </SmoothRectangleShell>
            </div>
        </div>
    );
};

export default Tips;
