import React from 'react' //IMPORTO PAQUETES DE REACT
import Lamp from './components/Lamp' //IMPORTO COMPONENTE Lamp

import Texto from './components/Texto' //IMPORTO COMPONENTE Texto

const App = () =>{   //CREO COMPONENTE FUNCIONAL APP
  const [valor,setValor] = React.useState(300) //USO HOOK useState para poder cambiar valor de const valor
  const [texto, setTexto] = React.useState('') //USO HOOK useState para poder cambiar valor de const texto

  const addValor=()=>{ //CREO FUNCION addValor

    setValor(valor+1) //CAMBIO VALOR de const valor, A SU VALOR ACTUAL LE AUMENTO 1

  }

  console.log(texto)
  
  return (
    <>
    <Texto valor={valor} texto={texto}/> {/*LLAMO A COMPONENTE IMPORTADO Texto y le paso como props valor y texto*/}
    <Lamp />
    <button onClick={addValor}>AGREGAR VALOR</button>
    <button onClick={()=>setValor(valor-1)}>RESTAR VALOR</button>
    <input onChange={e=>setTexto(e.target.value)} ></input>
    </>
  );
}

export default App;
