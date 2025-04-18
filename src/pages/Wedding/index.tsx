"use client";

import React, { useState } from "react";
import CalendarWithDay from "./components/CalendarWithDay";
import Confirmation from "./components/Confirmation";
import Contacts from "./components/Contacts";
import DressCode from "./components/DressCode";
import Greeting from "./components/Greeting";
import GuestChat from "./components/GuestChat";
import MainCover from "./components/MainCover";
import OrganizationalIssues from "./components/OrganizationalIssues";
import Place from "./components/Place";
import ProgramDay from "./components/ProgramDay";
import Tips from "./components/Tips";
import styles from "./index.module.scss";

const Wedding = (): React.ReactElement => {
    const [view, setView] = useState(false);
    return (
        <div className={styles.main}>
            <div>
                <MainCover />
            </div>
            <div>
                <Greeting />
            </div>
            <div>
                <CalendarWithDay />
            </div>
            <div>
                <Place />
            </div>
            <div>
                <ProgramDay />
            </div>
            <div>
                <DressCode />
            </div>
            <div>
                <Tips onFinish={() => setView(true)} />
            </div>
            {view ? (
                <>
                    <div>
                        <GuestChat />
                    </div>
                    <div>
                        <OrganizationalIssues />
                    </div>
                    <div>
                        <Confirmation />
                    </div>
                    <div>
                        <Contacts />
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Wedding;
