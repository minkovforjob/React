import cooljobLogo from "../../assets/icons/cooljob.svg";
import styles from "./styles.module.css";
import InputsBar from "../inputsBar";
function Header() {
    return (
        <div className={styles.cont}>


            <div className={styles.nav}>
                <div className={styles.nav1}>
                    <img className={styles.logo} src={cooljobLogo} alt="cooljob_Logo" />
                    <a href="">Поиск работы</a>
                    <a href="">Поиск стартапов</a>
                </div>
                <div className={styles.nav1}>
                    <a href="">Регистрация</a>
                    <button className={styles.btnLogin}>Вход</button>
                </div>

            </div>
            <h1>Один клик и работа в кармане</h1>
            <InputsBar />
        </div>
    );
}
export default Header;