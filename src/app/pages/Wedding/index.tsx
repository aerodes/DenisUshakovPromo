import MainCover from "../components/MainCover";
import styles from "./index.module.scss"

const Wedding = (): React.ReactElement => {

    return (
        <div className={styles.main}>
            <div>
                <MainCover />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Wedding;
