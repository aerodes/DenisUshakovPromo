import { CSSProperties } from "react";
import styles from "./index.module.scss";
const SmoothRectangleShell = ({
    style,
    children,
}: {
    style?: CSSProperties;
    children?: React.ReactNode;
}): React.ReactElement => {
    return (
        <div style={style} className={styles.mainShell}>
            {children}
        </div>
    );
};
export default SmoothRectangleShell;
