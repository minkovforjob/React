import styles from "./styles.module.css";

import Find from "../../assets/icons/Find.svg";
import GPS from "../../assets/icons/GPS.svg";


function InputsBar() {
    return (
        <div className={styles.contForInput}>
            <div className={styles.inputWrapper}>
                <img src={Find} alt="" />
                <input className={styles.inpStyle} type="text" placeholder="Должность или компания" />
            </div>
            <div className={styles.inputWrapper}>
                <img src={GPS} alt="" />
                <input type="text" placeholder="Город, Страна" />
            </div>
            <button className={styles.btnFind}>Поиск</button>
        </div>
    );
}
export default InputsBar;