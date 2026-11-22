import styles from "./styles.module.css";
function CityCard({ city }) {
    return (

        <div className={styles.cont}>
            <h2>{city.name}</h2>
            <p>{city.description}</p>
            <img className={styles.img} src={city.imageUrl} alt="" />
            <p>{city.facts}</p>
        </div>
    );
}

export default CityCard;