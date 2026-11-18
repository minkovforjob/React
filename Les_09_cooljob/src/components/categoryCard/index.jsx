import styles from "./styles.module.css";
function CategoryCard({ id, icon, title }) {
    return (
        <div className={styles.cont}>
            <img
                key={id}
                src={icon}
                alt="Category logo"
            />

            <p>{title}</p>
        </div>
    );
}
export default CategoryCard;