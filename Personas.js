import React, { useState } from 'react';
import nombres from './nombres';


function App() {

  const [personaEstado, setPersonaEstado] = useState(0);
  
    const otroNombre = () => {
   let indice = []
  
    for (var i = 0; i < personaEstado.length; i++) {
      indice.push(i + 1)
    }
    setPersonaEstado(indice);
  }

  const nombrePersona = nombres.map(elemento => {
      return (
        <>
            {elemento}
        </>
      )

    })
    
  return (
    <div>
      <div>
        {nombrePersona}
        </div>
      <button onClick={otroNombre}> Borrar planeta</button >
      </div>
  )
}

export default App;


