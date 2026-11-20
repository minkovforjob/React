import { useState } from 'react';
import styles from "./styles.module.css";
function List() {
    const [people, setPeople] = useState([
        { id: 1, name: 'Иван', age: 20 },
        { id: 2, name: 'Мария', age: 22 },
        { id: 3, name: 'Алексей', age: 21 },
        { id: 4, name: 'Марина', age: 19 },
        { id: 5, name: 'Даша', age: 23 },
        { id: 6, name: 'Глеб', age: 24 },
        { id: 7, name: 'Дима', age: 18 },
        { id: 8, name: 'Гриша', age: 20 },
        { id: 9, name: 'Серафим', age: 21 }
    ]);
    // console.log("List func");
    function delItemList(index) {
        setPeople(people.filter((el, i) => i !== index));
    };
    return (
        <div>
            <h2>List of people</h2>
            <ul>
                {people.map((el, index) => {
                    return (
                        <li key={el.id} >
                            <button
                                onClick={() => delItemList(index)}
                                className={styles.btnDel}> del
                            </button>
                            Name: {el.name}, age: {el.age}
                        </li>
                    );
                    //


                })}
            </ul>
        </div>
    );
}
export default List;