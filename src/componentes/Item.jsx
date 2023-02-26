import React from 'react'

const Item = ({ item, indice, definirItens }) => {
    
    const apagarItem = () => {
        console.log(indice);
        definirItens(listaAtual => [...listaAtual.filter((itemDaLista, indiceDoItem)=> indiceDoItem!==indice)])
    }
    return (
        <div className='item'>
            <input value={item} disabled className='item__conteudo' type="text" />
            <button onClick={apagarItem} className='item__botao-apagar'>Apagar</button>
        </div>
    )
}

export default Item