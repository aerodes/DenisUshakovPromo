"use client";

import ImageCustom from "@/src/shared/components/ImageCustom";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useOnScreenEffect } from "@/src/shared/hooks/useOnScreenEffect";

const Greeting = (): React.ReactElement => {
    const [view, setView] = useState(false);

    const ref = useRef(null);

    useOnScreenEffect(() => {
        setView(true);
    }, ref);

    return (
        <>
            <div className={styles.main_gradient} />
            <div className={styles.main}>
                <div className={styles.main_title}>Дорогие гости!</div>
                <div className={styles.main_title_sub}>
                    Приглашаем вас разделить с нами радость особенного дня - нашей свадьбы!
                </div>
                <div
                    ref={ref}
                    className={clsx(
                        styles.main_photo_container,
                        view && styles.main_photo_container_load
                    )}
                >
                    <div className={styles.main_photo_container_1}>
                        <ImageCustom src="./shared/images/greeting_1.png" />
                    </div>
                    <div className={styles.main_photo_container_2}>
                        <ImageCustom src="./shared/images/greeting_2.png" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Greeting;
