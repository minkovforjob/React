import styles from "./styles.module.css";
import stylesHome from "../../pages/home/styles.module.css";

function VacancyCard({ id, ellpse, icon, title, text, city, days }) {
    return (
        <div className={stylesHome.contFlexGridElement}>
            <span > <img className={styles.compEllpse} src={ellpse} alt="punkt" />{title}</span>
            <h4>{text}</h4>
            <span>{city}</span>

            <span ><img className={styles.compLogo} src={icon} alt="Company logo" />  {days}</span>
        </div>);
}
export default VacancyCard;