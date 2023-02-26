import { useState } from "react";
import Formulario from "./componentes/Formulario";
import './estilo.css'

function App() {
  const [itens, definirItens] = useState([])
  return (
    <div>
      <Formulario definirItens={definirItens} />

      {itens.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
