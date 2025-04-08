"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";
import ImageCustom from "@/src/shared/components/ImageCustom";
import { useOnScreenEffect } from "@/src/shared/hooks/useOnScreenEffect";
import { useState, useRef } from "react";
import clsx from "clsx";
import useMediaQuery from "@/src/shared/hooks/useMediaQuery";

const OrganizationalIssues = (): React.ReactElement => {
    const is1024px = useMediaQuery("(min-width: 1024px)");
    const [view, setView] = useState(false);

    const ref = useRef(null);

    useOnScreenEffect(() => {
        setView(true);
    }, ref);
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ОРГАНИЗАЦИОННЫЕ ДЕТАЛИ</div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Мы очень рады видеть каждого из вас на нашем празднике, но, к сожалению, из-за
                    ограничений по количеству мест, просим учесть, что +1 без предварительного
                    согласования невозможен. Заранее благодарим за понимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    Из-за ограничений по количеству мест, просим учесть, что посещение с детьми, не
                    включенными в список гостей, невозможно. Заранее благодарим за понимание!
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
                    Для вашего удобства на нашем празднике предусмотрена игровая площадка для детей.
                    Однако, пожалуйста, учтите, что отдельные аниматоры не предусмотрены. Также
                    просим вас учесть, что в случае порчи или повреждения имущества, ответственность
                    за возмещение ущерба ложится на родителей. Заранее благодарим за понимание и
                    внимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell
                    style={
                        is1024px
                            ? { margin: "18px 0 0 0", maxWidth: "675px" }
                            : { margin: "18px 0 0 0", maxWidth: "375px" }
                    }
                >
                    На нашем празднике будут представлены вино, шампанское и водка. Если у вас есть
                    особые предпочтения по напиткам, мы будем рады, если вы возьмете их с собой.
                    Заранее благодарим за понимание и с нетерпением ждем встречи с вами!
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
                    Наш праздник будет проходить на открытой площадке, поэтому, пожалуйста,
                    учитывайте погодные условия при выборе наряда. Рекомендуем взять с собой что-то
                    теплое на случай прохладного вечера.
                </SmoothRectangleShell>
            </div>
            <div
                ref={ref}
                className={clsx(
                    styles.main_photo_container,
                    view && styles.main_photo_container_load
                )}
            >
                <div className={styles.main_photo_container_1}>
                    <ImageCustom src="./shared/images/issues_1.png" />
                </div>
                <div className={styles.main_photo_container_2}>
                    <ImageCustom src="./shared/images/issues_2.png" />
                </div>
            </div>
        </div>
    );
};

export default OrganizationalIssues;
