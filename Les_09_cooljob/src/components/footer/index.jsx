import styles from "./styles.module.css";
import iconFooterIn from "../../assets/icons/iconFooterIn.svg";
import iconFooterGoogle from "../../assets/icons/iconFooterGoogle.svg";
import iconFooterTwiter from "../../assets/icons/iconFooterTwiter.svg";
import iconFooterFacebook from "../../assets/icons/iconFooterFacebook.svg";
import cooljobLogo from "../../assets/icons/cooljob.svg";

const citys = ["Осака", "Коясан", "Токио", "Хаконэ", "Наэба", "Томаму", "Йокогама", "Нагоя", "Саппоро", "Кобе"]
function Footer() {
    return (
        <div className={styles.cont}>
            <p>Популярные города</p>
            <div className={styles.contCitysList}>
                {citys.map((el) => { return (<a href="">{el}</a>) })}
            </div>
            <div className={styles.contLogos}>
                <div><img className={styles.logo} src={cooljobLogo} alt="cooljob_Logo" /></div>
                <div className={styles.cont1}>
                    <img className={styles.iconFooter} src={iconFooterIn} alt="punkt" />
                    <img className={styles.iconFooter} src={iconFooterGoogle} alt="punkt" />
                    <img className={styles.iconFooter} src={iconFooterTwiter} alt="punkt" />
                    <img className={styles.iconFooter} src={iconFooterFacebook} alt="punkt" />
                </div>
            </div>
        </div>
    );
}
export default Footer;