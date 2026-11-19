import styles from "./styles.module.css";

import CategoryCardList from "../../components/categoryCardList";
import VacancyCardList from "../../components/vacancyCardList";

function Home() {
    return (
        <div className={styles.cont}>
            <CategoryCardList />
            <VacancyCardList />
        </div>
    );
}
export default Home;