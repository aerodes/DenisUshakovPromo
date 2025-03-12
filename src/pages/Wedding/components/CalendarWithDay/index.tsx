"use client";

import ImageCustom from "@/src/shared/components/ImageCustom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const CalendarWithDay = (): React.ReactElement => {
    const getDate = () => {
        const now = new Date();
        const targetDate = new Date(2025, 6, 25);

        let delta = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

        const SEC_IN_MINUTE = 60;
        const SEC_IN_HOUR = SEC_IN_MINUTE * 60;
        const SEC_IN_DAY = SEC_IN_HOUR * 24;
        const SEC_IN_MONTH = SEC_IN_DAY * 30; // Условный месяц (30 дней)

        const months = Math.floor(delta / SEC_IN_MONTH);
        delta %= SEC_IN_MONTH;

        const days = Math.floor(delta / SEC_IN_DAY);
        delta %= SEC_IN_DAY;

        const hours = Math.floor(delta / SEC_IN_HOUR);
        delta %= SEC_IN_HOUR;

        const minutes = Math.floor(delta / SEC_IN_MINUTE);
        const seconds = delta % SEC_IN_MINUTE;

        return { months, days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(getDate());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getDate());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>Торжество состоится:</div>
            <div className={styles.main_photo_container}>
                <div className={styles.main_photo_container_calendar}>
                    <ImageCustom src="./shared/images/calendar.png" />
                </div>
            </div>
            <div className={styles.main_title}>25.07.2025</div>
            <div className={styles.main_daysLeft}>
                Осталось:{" "}
                {`${timeLeft.months} мес. ${timeLeft.days} д. ${
                    timeLeft.hours.toString().length > 1 ? timeLeft.hours : "0" + timeLeft.hours
                }:${
                    timeLeft.minutes.toString().length > 1
                        ? timeLeft.minutes
                        : "0" + timeLeft.minutes
                }:${
                    timeLeft.seconds.toString().length > 1
                        ? timeLeft.seconds
                        : "0" + timeLeft.seconds
                }`}
            </div>
        </div>
    );
};

export default CalendarWithDay;
