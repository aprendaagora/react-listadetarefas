import React, { useState } from 'react'

const Formulario = ({definirItens}) => {
  const [texto, definirTexto] = useState  ("");

  const criarItem = (e) => {
    e.preventDefault()
    definirItens(listaAtual => [...listaAtual, texto]);
    definirTexto("");
  }

  return (
    <form className='formulario' onSubmit={criarItem}>
        <input className='formulario__input' value={texto} onChange={(e) => definirTexto(e.target.value)} type="text" />
        <button className='formulario__botao-adicionar'>+</button>
    </form>
  )
}

export default Formulario