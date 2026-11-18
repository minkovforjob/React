import icon_cat_1 from "../../assets/icons/icon_cat_1.svg";
import icon_cat_2 from "../../assets/icons/icon_cat_2.svg";
import icon_cat_3 from "../../assets/icons/icon_cat_3.svg";
import icon_cat_4 from "../../assets/icons/icon_cat_4.svg";
import icon_cat_5 from "../../assets/icons/icon_cat_5.svg";
import icon_cat_6 from "../../assets/icons/icon_cat_6.svg";
import icon_cat_7 from "../../assets/icons/icon_cat_7.svg";
import icon_cat_8 from "../../assets/icons/icon_cat_8.svg";
import icon_cat_9 from "../../assets/icons/icon_cat_9.svg";
import icon_cat_10 from "../../assets/icons/icon_cat_10.svg";



const cardsList = [
    { id: 1, icon: icon_cat_1, title: "Финансы" },
    { id: 2, icon: icon_cat_2, title: "Грузоперевозки" },
    { id: 3, icon: icon_cat_3, title: "Дизайн" },
    { id: 4, icon: icon_cat_4, title: "Ресторанный бизнес" },
    { id: 5, icon: icon_cat_5, title: "Медицина" },
    { id: 6, icon: icon_cat_6, title: "Мультимедиа" },
    { id: 7, icon: icon_cat_7, title: "Служба поддержки" },
    { id: 8, icon: icon_cat_8, title: "Менеджмент" },
    { id: 9, icon: icon_cat_9, title: "Продажи" },
    { id: 10, icon: icon_cat_10, title: "Больше категорий" },

];
function categoryCardList() {
    return (
        <div>
            <h2>Работа по категориям</h2>
            <div>
                {cardsList.map((el) => {
                    return (
                        <categoryCard key={el.id}{...el} />
                    );
                })}
            </div>
        </div>
    );
}
export default categoryCardList;