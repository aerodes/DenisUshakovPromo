"use client"

import Image from "next/image";
import styles from "./index.module.scss"
import { useEffect, useState } from "react";
import useMediaQuery from "@/app/shared/hooks/useMediaQuery";

const MainCover = (): React.ReactElement => {

    const [sizeImage, setSizeImage] = useState({
        width: 200,
        height: 260
    });

    const is375px = useMediaQuery('(min-width: 375px)');
    const is425px = useMediaQuery('(min-width: 425px)');
    const is600px = useMediaQuery('(min-width: 600px)');
    const is1024px = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        if (is375px) {
            setSizeImage({
                width: 200,
                height: 260
            })
        }
        if (is425px) {
            setSizeImage({
                width: 300,
                height: 400
            })
        }
        if (is600px) {
            setSizeImage({
                width: 400,
                height: 550
            })
        }
        if (is1024px) {
            setSizeImage({
                width: 800,
                height: 1200
            })
        }
    }, [is375px, is425px, is600px, is1024px])

    return (
        <div className={styles.main}>
            <div className={styles.main_title}>D</div>
            <div><Image src={"./shared/title_cover.png"} alt={""} width={sizeImage.width} height={sizeImage.height} className={styles.main_img} /></div>
            <div className={styles.main_title}>K</div>
        </div>
    );
}

export default MainCover;
