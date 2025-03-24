"use client";

import SmoothRectangleShell from "@/src/shared/components/SmoothRectangleShell";
import styles from "./index.module.scss";

const OrganizationalIssues = (): React.ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>ОРГАНИЗАЦИОННЫЕ ДЕТАЛИ</div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "650px" }}>
                    Мы очень рады видеть каждого из вас на нашем празднике, но, к сожалению, из-за
                    ограничений по количеству мест, просим учесть, что +1 без предварительного
                    согласования невозможен. Заранее благодарим за понимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "550px" }}>
                    Из-за ограничений по количеству мест, просим учесть, что посещение с детьми, не
                    включенными в список гостей, невозможно. Заранее благодарим за понимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "750px" }}>
                    Для вашего удобства на нашем празднике предусмотрена игровая площадка для детей.
                    Однако, пожалуйста, учтите, что отдельные аниматоры не предусмотрены. Также
                    просим вас учесть, что в случае порчи или повреждения имущества, ответственность
                    за возмещение ущерба ложится на родителей. Заранее благодарим за понимание и
                    внимание!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_left}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "750px" }}>
                    На нашем празднике будут представлены вино, шампанское и водка. Если у вас есть
                    особые предпочтения по напиткам, мы будем рады, если вы возьмете их с собой.
                    Заранее благодарим за понимание и с нетерпением ждем встречи с вами!
                </SmoothRectangleShell>
            </div>
            <div className={styles.main_container_right}>
                <SmoothRectangleShell style={{ margin: "18px 10px 0 30px", maxWidth: "650px" }}>
                    Наш праздник будет проходить на открытой площадке, поэтому, пожалуйста,
                    учитывайте погодные условия при выборе наряда. Рекомендуем взять с собой что-то
                    теплое на случай прохладного вечера.
                </SmoothRectangleShell>
            </div>
        </div>
    );
};

export default OrganizationalIssues;
