"use client";

import SmoothContacts from "@/src/shared/components/SmoothContacts";
import styles from "./index.module.scss";
import TelegramIcon from "@/public/shared/icons/telegram_svgrepo.svg";
import CallIcon from "@/public/shared/icons/call_svgrepo.svg";
import useSafeLinkOpener from "@/src/shared/hooks/useSafeLinkOpener";

const Contacts = (): React.ReactElement => {
    const data = {
        denis: {
            url: "https://t.me/aerodes",
            phone: "+79101917293",
        },
        kristina: {
            url: "https://t.me/aaardms",
            phone: "+79997400914",
        },
    };
    const safeOpen = useSafeLinkOpener();
    const openLinkClick = (url: string) => {
        safeOpen(url, {
            target: "_blank",
            fallbackStrategy: "location",
        });
    };
    const dialNumber = (phoneNumber: string) => {
        if (typeof window !== "undefined") {
            window.location.href = `tel:${phoneNumber}`;
        }
    };
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>СВЯЗЬ С НАМИ</div>
            <div className={styles.main_container}>
                <SmoothContacts srcAvatar="./shared/images/contacts_1.png" textFace="Денис">
                    <div className={styles.main_contacts}>
                        <div
                            className={styles.main_contacts_item}
                            onClick={() => openLinkClick(data.denis.url)}
                        >
                            <div className={styles.main_contacts_item_icon}>
                                <TelegramIcon />
                            </div>
                            <div className={styles.main_contacts_item_text}>@aerodes</div>
                        </div>
                        <div
                            className={styles.main_contacts_item}
                            onClick={() => dialNumber(data.denis.phone)}
                        >
                            <div className={styles.main_contacts_item_icon}>
                                <CallIcon />
                            </div>
                            <div className={styles.main_contacts_item_text}>+7 (910) 191-72-93</div>
                        </div>
                    </div>
                </SmoothContacts>
                <SmoothContacts srcAvatar="./shared/images/contacts_2.png" textFace="Кристина">
                    <div className={styles.main_contacts}>
                        <div
                            className={styles.main_contacts_item}
                            onClick={() => openLinkClick(data.kristina.url)}
                        >
                            <div className={styles.main_contacts_item_icon}>
                                <TelegramIcon />
                            </div>
                            <div className={styles.main_contacts_item_text}>@aaardms</div>
                        </div>
                        <div
                            className={styles.main_contacts_item}
                            onClick={() => dialNumber(data.kristina.phone)}
                        >
                            <div className={styles.main_contacts_item_icon}>
                                <CallIcon />
                            </div>
                            <div className={styles.main_contacts_item_text}>+7 (999) 740-09-14</div>
                        </div>
                    </div>
                </SmoothContacts>
            </div>
        </div>
    );
};

export default Contacts;
