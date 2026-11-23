import { useState } from 'react';
import './App.css';
import CitySelector from './components/citySelector/CitySelector';
import CityCard from './components/сityCard/CityCard';
import MathQuiz from './components/mathQuiz/MathQuiz';


function App() {
  const [city, setCity] = useState(null);


  // function plusOne() {
  //   setCount(count + 1);
  // }

  // function minusOne() {
  //   setCount(count - 1);
  // }

  return (

    <>
      <CitySelector setCity={setCity} />
      {city && (
        <CityCard city={city} />
      )}

      <MathQuiz />
    </>
  );
}

export default App;

