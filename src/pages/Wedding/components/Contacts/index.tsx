"use client";

import SmoothContacts from "@/src/shared/components/SmoothContacts";
import styles from "./index.module.scss";
import TelegramIcon from "@/public/shared/icons/telegram_svgrepo.svg";
import CallIcon from "@/public/shared/icons/call_svgrepo.svg";

const Contacts = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>СВЯЗЬ С НАМИ</div>
            <div className={styles.main_container}>
                <SmoothContacts srcAvatar="./shared/images/contacts_1.png" textFace="Развернуть">
                    <div className={styles.main_contacts}>
                        <div className={styles.main_contacts_item}>
                            <TelegramIcon />
                            <div className={styles.main_contacts_item_text}>@aerodes</div>
                        </div>
                        <div className={styles.main_contacts_item}>
                            <CallIcon />
                            <div className={styles.main_contacts_item_text}>+7 (910) 191-72-93</div>
                        </div>
                    </div>
                </SmoothContacts>
                <SmoothContacts srcAvatar="./shared/images/contacts_2.png" textFace="Развернуть">
                    <div className={styles.main_title_}>Не звоните нам</div>
                </SmoothContacts>
            </div>
        </div>
    );
};

export default Contacts;
