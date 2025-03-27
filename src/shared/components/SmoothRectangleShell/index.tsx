import { CSSProperties, HTMLAttributes } from "react";
import styles from "./index.module.scss";
import React from "react";
const SmoothRectangleShell = ({
    style,
    children,
    ...args
}: {
    style?: CSSProperties;
    children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>): React.ReactElement => {
    return (
        <div {...args} style={style} className={styles.mainShell}>
            {children}
        </div>
    );
};
export default SmoothRectangleShell;
