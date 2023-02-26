import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Item from "./componentes/Item";
import './estilo.css'

function App() {
  const [itens, definirItens] = useState([])

  return (
    <div>
      <div className="container">
        <Formulario definirItens={definirItens} />

        {itens.length ? itens.map((item, indice) => (
          <Item item={item} indice={indice} key={indice} definirItens={definirItens} />
        )): (
          <p>Não há itens na lista</p>
        )}
      </div>
    </div>
  );
}

export default App;
