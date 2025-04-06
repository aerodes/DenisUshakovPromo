"use client";

import ImageCustom from "@/src/shared/components/ImageCustom";
import styles from "./index.module.scss";
import { useRef, useState } from "react";
import { useOnScreenEffect } from "@/src/shared/hooks/useOnScreenEffect";
import clsx from "clsx";

const DressCode = (): React.ReactElement => {
    const [view, setView] = useState(false);
    const ref = useRef(null);

    useOnScreenEffect(() => {
        setView(true);
    }, ref);
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ДРЕСС - КОД </div>
            <div className={styles.main_title_sub}>
                ПРОСИМ ИЗБЕЖАТЬ ЯРКИХ ЦВЕТОВ
                <br />
                ПОДДЕРЖАТЬ ЦВЕТОВУЮ ГАММУ
            </div>
            <div className={styles.main_container}>
                <div className={styles.main_container_photo}>
                    <div className={styles.main_container_photo_item}>
                        <ImageCustom src="./shared/images/dress_1.jpg" />
                    </div>
                    <div className={styles.main_container_photo_item}>
                        <ImageCustom src="./shared/images/dress_2.jpg" />
                    </div>
                    <div className={styles.main_container_photo_item}>
                        <ImageCustom src="./shared/images/dress_3.jpg" />
                    </div>
                </div>
                <div
                    ref={ref}
                    className={clsx(
                        styles.main_container_color,
                        view && styles.main_container_color_load
                    )}
                >
                    <div className={styles.main_container_color_item}>
                        <ImageCustom src="./shared/icons/ellipse_1.svg" />
                    </div>
                    <div className={styles.main_container_color_item}>
                        <ImageCustom src="./shared/icons/ellipse_2.svg" />
                    </div>
                    <div className={styles.main_container_color_item}>
                        <ImageCustom style={{ zIndex: "10" }} src="./shared/icons/ellipse_3.svg" />
                    </div>
                    <div className={styles.main_container_color_item}>
                        <ImageCustom src="./shared/icons/ellipse_4.svg" />
                    </div>
                    <div className={styles.main_container_color_item}>
                        <ImageCustom src="./shared/icons/ellipse_5.svg" />
                    </div>
                </div>
                <div className={styles.main_container_photo}>
                    <div className={styles.main_container_photo_item}>
                        <ImageCustom src="./shared/images/dress_4.jpg" />
                    </div>
                    <div className={styles.main_container_photo_item}>
                        <ImageCustom src="./shared/images/dress_5.jpg" />
                    </div>
                    <div className={styles.main_container_photo_item}>
                        <ImageCustom src="./shared/images/dress_6.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressCode;
