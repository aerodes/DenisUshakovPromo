"use client";

import styles from "./index.module.scss";
import Logo from "@/public/shared/icons/main_logo.svg";

const MainCover = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_cover} />
            <div className={styles.main_container}>
                <div className={styles.main_container_D}>D</div>
                <div className={styles.main_container_K}>K</div>
                <div className={styles.main_container_logo}>
                    <Logo />
                </div>
            </div>
        </div>
    );
};

export default MainCover;
