import { useState } from 'react';
import styles from "./styles.module.css";
import Answer from "../аnswer/Answer";
function MathQuiz() {
    const [count, setCount] = useState(0);

    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const rezultComp = a + b;
    // userAnswer вытягивается из Answer, - они связаны пропс
    function updatePoints(userAnswer) {

        if (rezultComp === userAnswer)
            setCount(count + 1);
        else setCount(count - 1);
    }

    return (
        <div className={styles.cont}>
            <h2>Счет:    {count}</h2>
            <h3>{a}  +  {b}  =  </h3>
            {/* передаю Answer (с помощью пропс updatePoints) функцию updatePoints.
             Внутри Answer она будет доступна под именем updatePoints. */}
            <Answer updatePoints={updatePoints} />

        </div>

    );
}
export default MathQuiz;