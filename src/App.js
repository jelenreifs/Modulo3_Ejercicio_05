//import nombres from './nombres';
import React, { useState } from 'react';
const array = ["Ander","Elena","Diego"]


function App() {

  const [contador, setContador] = useState(0);
  
  const otroNombre = () => {
      if (contador === 2) {
        setContador(0)
      } else { 
        setContador(contador + 1)
      }
    }
    
  return (
      <>
        <h1>{array[contador]}</h1>  
        <button onClick={otroNombre}>Otro Nombre</button>
      </>
    )
}

export default App;
