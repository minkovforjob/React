import styles from "./styles.module.css";

import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import CategoryCardList from "../../components/categoryCardList";

function Home() {
    return (
        <div className={styles.cont}>
            <Header />
            <SearchBar />
            <CategoryCardList />
        </div>
    );
}
export default Home;