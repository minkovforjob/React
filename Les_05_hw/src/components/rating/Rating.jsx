import { useState } from 'react';
function Rating() {
  const [ratingValue, setRatingValue] = useState(0);
  const ratingList = [
    'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png',
    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'
  ]
  function funct2() { setRatingValue(ratingValue = 0) };
  function funct3() { setRatingValue(ratingValue = 1) };
  function funct4() { setRatingValue(ratingValue = 2) };
  function funct5() { setRatingValue(ratingValue = 3) };

  return (
    <div>
      <img src={ratingList[ratingValue]} alt="" />
      <button onClick={funct2}>Плохо</button>
      <button onClick={func3}>Приемлемо</button>
      <button onClick={func4}>Хорошо</button>
      <button onClick={func5}>Отлично</button>
    </div>

  );

}
export default Rating;

