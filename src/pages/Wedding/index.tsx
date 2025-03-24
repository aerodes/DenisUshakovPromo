import CalendarWithDay from "./components/CalendarWithDay";
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
                <Tips />
            </div>
            <div>
                <GuestChat />
            </div>
            <div>
                <OrganizationalIssues />
            </div>
        </div>
    );
};

export default Wedding;
