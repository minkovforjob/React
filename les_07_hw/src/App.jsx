import { useState } from 'react';
import './App.css';
import CitySelector from './components/citySelector/CitySelector';
import CityCard from './components/сityCard/CityCard';



function App() {
  const [city, setCity] = useState(null);
  // setCity(() => { });
  return (

    <>
      <CitySelector setCity={setCity} />
      {city && (
        <CityCard city={city} />
      )}

    </>
  );
}

export default App;

