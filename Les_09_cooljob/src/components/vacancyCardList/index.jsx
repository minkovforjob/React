import vacancyCard from "../vacancyCard";
import styles from "./styles.module.css";



import CocaCola_blLogo from "../../assets/icons/CocaCola_bl.svg";
import Disney_blLogo from "../../assets/icons/Disney_bl.svg";
import facebook_blLogo from "../../assets/icons/facebook_bl.svg";
import MS_blLogo from "../../assets/icons/MS_bl.svg";
import Sony_blLogo from "../../assets/icons/Sony_bl.svg";
const company_icons = [
    {
        id: 1, icon: Sony_blLogo, title: "Финансы", text: "Менеджер по управлению финансами в крупной компании", city: "Осака, Япония", days: "Sony, 3 дня назад"
    },
    {
        id: 2, icon: facebook_blLogo, title: "Продажи", text: "Специалист по продажам", city: "Коясан, Япония", days: "Facebook, 7 дней назад"
    },
    { id: 3, icon: CocaCola_blLogo, title: "Служба поддержки", text: "Оператор колл центра", city: "Томаму, Япония", days: "CocaCola, 1 день назад" },
    { id: 4, icon: Sony_blLogo, title: "Мультимедиа", text: "Системный администратор", city: "Токио, Япония", days: "Sony, 3 дня назад" },
    { id: 5, icon: facebook_blLogo, title: "Дизайн", text: "Дизайнер интерьера в профессиональную студию в центре города", city: "Йокогама, Япония", days: "Facebook, 7 дней назад" },
    { id: 6, icon: CocaCola_blLogo, title: "Грузоперевозки", text: "Водитель на дальние дистанции", city: "Кобе. Япония", days: "CocaCola, 1 день назад" }

];

function vacancyCardList() {
    return (
        <div className={styles.cont}>
            <h2>Новые вакансии</h2>
            <p>Найти работу своей мечты прямо сейчас</p>
            <div className={styles.gridCont}>
                {company_icons.map((el) => {
                    return (
                        <CategoryCard key={el.id}{...el} />
                    );
                })}
            </div>
        </div>
    );
}
export default vacancyCardList;