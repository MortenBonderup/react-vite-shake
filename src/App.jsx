import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [ttal, setTtal] = useState(0);
  const madretter = ["Boller i karry", "Flæskesteg med skysovs", "Tomatsuppe", "Mørbrad med kartofler", "Burger", "Pølser med pommes frites", "Tarteletter med hønskekød", "Stegt and", "Kalv stegt som vildt", "Bøf bearnaise"];

  useEffect(() => {

    /*
    Math.random() returnerer et tilfældigt decimaltal mellem 0 og 1. 
    Vi ganger dette tal med 10 for at få et tal mellem 0 og 10. 
    Math.floor() afrunder tallet til nærmeste heltal nedad, så vi 
    får et tal mellem 0 og 9(begge inklusive).
    */
    function haandterRystelse(event) {
      const acceleration = event.acceleration;
      const foelsomhed = 25; // mindskes værdien øges følsomheden overfor rystelser, øges værdien reduceres følsomheden
      if (acceleration.x > foelsomhed || acceleration.y > foelsomhed || acceleration.z > foelsomhed) {
        setTtal(Math.floor(Math.random() * 10));
      }
    }

    window.addEventListener('devicemotion', haandterRystelse);

    return () => {
      window.removeEventListener('devicemotion', haandterRystelse);
    }
  }, []);

  const madret = madretter[ttal];

  return (
    <>
      <h2>Ryst mobilen for tilfældig madret</h2>
      {madret}
    </>
  )
}

export default App;
