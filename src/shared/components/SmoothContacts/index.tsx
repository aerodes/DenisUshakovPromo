import { CSSProperties, HTMLAttributes, useState } from "react";
import styles from "./index.module.scss";
import React from "react";
import ImageCustom from "../ImageCustom";
import { useOutsideEventClick } from "../../hooks/useOutsideEventClick";
const SmoothContacts = ({
    style,
    srcAvatar = "",
    textFace,
    children,
    ...args
}: {
    style?: CSSProperties;
    srcAvatar?: string;
    textFace?: string;
    children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>): React.ReactElement => {
    const [viewInfo, setViewInfo] = useState(false);
    const outsideAlerterRef = useOutsideEventClick(() => setViewInfo(false));
    return (
        <div {...args} style={style} className={styles.mainShell} ref={outsideAlerterRef}>
            <div className={styles.mainShell_face} onClick={() => setViewInfo(!viewInfo)}>
                <div className={styles.mainShell_face_avatar}>
                    <ImageCustom src={srcAvatar} />
                </div>
                <div className={styles.mainShell_face_text}>{textFace}</div>
            </div>
            <div className={viewInfo ? styles.mainShell_info : styles.mainShell_info_none}>
                {children}
            </div>
        </div>
    );
};
export default SmoothContacts;
