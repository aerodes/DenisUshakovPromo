"use client";

import ImageCustom from "@/src/shared/components/ImageCustom";
import styles from "./index.module.scss";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useOnScreenEffect } from "@/src/shared/hooks/useOnScreenEffect";

const Place = (): React.ReactElement => {
    const [view, setView] = useState(false);
    const linkMap =
        "https://yandex.com/maps/7/kostroma/?ll=40.919980%2C57.739337&mode=poi&poi%5Bpoint%5D=40.919987%2C57.738951&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D142324209889&z=14.72";

        const ref = useRef(null);
        
            useOnScreenEffect(() => {
                setView(true);
            }, ref);
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ЛОКАЦИЯ</div>
            <div className={styles.main_title_sub}>Михалёвский бул., 1А, Кострома</div>
            <div className={styles.main_photo_container}>
                <div
                    className={styles.main_photo_container_btn}
                    onClick={() => window.open(linkMap, "_blank")}
                >
                    Показать на карте
                </div>
                <div ref={ref} className={styles.main_photo_container_place}>
                    <ImageCustom src="./shared/images/place.jpg" style={{ borderRadius: "8px" }} />
                    <div
                        className={clsx(
                            styles.main_photo_container_place_cover,
                            view && styles.main_photo_container_place_cover_load
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Place;
