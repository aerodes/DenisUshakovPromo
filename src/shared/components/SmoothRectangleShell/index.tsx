import { CSSProperties, HTMLAttributes, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import React from "react";
import { useOnScreenEffect } from "../../hooks/useOnScreenEffect";
import clsx from "clsx";
import { useTypewriter } from "../../hooks/useTypewriter";
const SmoothRectangleShell = ({
    style,
    children,
    onFinish = () => null,
    ...args
}: {
    style?: CSSProperties;
    children?: string;
    onFinish?: () => void;
} & HTMLAttributes<HTMLDivElement>): React.ReactElement => {
    const [view, setView] = useState(false);

    const ref = useRef(null);

    useOnScreenEffect(() => {
        setView(true);
    }, ref);

    const { text, isFinished } = useTypewriter([`${children}`], {
        delay: 2,
        loop: false,
        pauseTime: 0,
        start: view,
    });

    useEffect(() => {
        if (isFinished) {
            onFinish();
        }
    }, [isFinished]);

    return (
        <div
            ref={ref}
            {...args}
            style={style}
            className={clsx(styles.mainShell, view && styles.mainShell_load)}
        >
            {text}
        </div>
    );
};
export default SmoothRectangleShell;
