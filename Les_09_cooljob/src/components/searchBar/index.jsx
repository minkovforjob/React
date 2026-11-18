import styles from "./styles.module.css";

import CocaCola_blLogo from "../../assets/icons/CocaCola_bl.svg";
import Disney_blLogo from "../../assets/icons/Disney_bl.svg";
import facebook_blLogo from "../../assets/icons/facebook_bl.svg";
import MS_blLogo from "../../assets/icons/MS_bl.svg";
import Sony_blLogo from "../../assets/icons/Sony_bl.svg";
const company_icons = [
    { id: 1, icon: Disney_blLogo },
    { id: 2, icon: facebook_blLogo },
    { id: 3, icon: MS_blLogo },
    { id: 4, icon: Sony_blLogo },
    { id: 5, icon: CocaCola_blLogo }

];
function SearchBar() {
    return (
        <div className={styles.cont}>
            <div className={styles.cont1}>
                <span>Помогаем найти работу</span>
            </div>
            <div className={styles.cont1}>
                {company_icons.map((company) => (
                    <img
                        key={company.id}
                        src={company.icon}
                        alt="Company logo"
                    />
                ))}
            </div>
        </div>
    );
}
export default SearchBar;