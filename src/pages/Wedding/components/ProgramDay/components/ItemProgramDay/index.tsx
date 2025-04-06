"use client";

import { useOnScreenEffect } from "@/src/shared/hooks/useOnScreenEffect";
import styles from "./index.module.scss";
import { useRef, useState } from "react";
import clsx from "clsx";

const ItemProgramDay = ({
    children,
    time,
}: {
    children: React.ReactNode;
    time: string;
}): React.ReactElement => {
    const [view, setView] = useState(false);
    const ref = useRef(null);

    useOnScreenEffect(() => {
        setView(true);
    }, ref);
    return (
        <div ref={ref} className={styles.item}>
            <div className={clsx(styles.item_time, view && styles.item_time_load)}>{time}</div>
            <div className={clsx(styles.item_text, view && styles.item_text_load)}>{children}</div>
        </div>
    );
};

export default ItemProgramDay;
