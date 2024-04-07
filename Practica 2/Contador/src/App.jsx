import React, { useState } from 'react';
import Boton from '../src/componentes/Boton';
import Contador from '../src/componentes/contador';

const App = () => {
  const [numClics, setNumClics] = useState(0);

  const incrementNum = () => {
    console.log("Suma 1");
    setNumClics(prevNumClics => prevNumClics + 1);
  };

  const reiniciarNum = () => {
    console.log("Reinicia a 0");
    setNumClics(0);
  };

  return (
    <div>
      <Contador numClicks={numClics}/>
      <Boton text="Click" onClick={incrementNum} esClick={true} />
      <Boton text="Reiniciar" onClick={reiniciarNum} esClick={false} />
    </div>
  );
};

export default App;
