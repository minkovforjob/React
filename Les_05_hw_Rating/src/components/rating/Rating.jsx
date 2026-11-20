import { useState } from 'react';
import styles from "./styles.module.css";
function Rating() {
  const [ratingValue, setRatingValue] = useState(0);
  const ratingList = [
    'https://www.realclipart.com/png/small/67-676995_5-star-rating-png.png',
    'https://www.realclipart.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'
  ]
  function funct2() { setRatingValue(3) };
  function funct3() { setRatingValue(2) };
  function funct4() { setRatingValue(1) };
  function funct5() { setRatingValue(0) };

  return (
    <div className={styles.container}>
      <img src={ratingList[ratingValue]} alt="" />
      <div className={styles.cont1}>
        <button onClick={funct2}>Плохо</button>
        <button onClick={funct3}>Приемлемо</button>
        <button onClick={funct4}>Хорошо</button>
        <button onClick={funct5}>Отлично</button></div>
    </div>

  );

}
export default Rating;

