import styles from "./styles.module.css";
import stylesHome from "../../pages/home/styles.module.css";
function CategoryCard({ id, icon, title }) {
    return (
        <div className={stylesHome.contFlexGridElement}>
            <img className={styles.catLogo}
                key={id}
                src={icon}
                alt="Category logo"
            />

            <p>{title}</p>
        </div>
    );
}
export default CategoryCard;