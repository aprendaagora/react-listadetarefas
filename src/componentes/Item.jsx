import React, { useEffect, useRef, useState } from 'react'

const Item = ({ item, indice, definirItens }) => {

    const [edicaoHabilitada, definirEdicaoHabilitada] = useState(false);
    const [itemEditado, definirItemEditado] = useState(item)

    const inputRef = useRef(null);

    useEffect(() => {
        if (edicaoHabilitada) {
            inputRef.current.focus();
        }
    }, [edicaoHabilitada])
    
    const apagarItem = () => {
        definirItens(listaAtual => [...listaAtual.filter((itemDaLista, indiceDoItem)=> indiceDoItem!==indice)])
    }

    const ativarEdicao = () => {
        definirEdicaoHabilitada(true);
    }

    const cancelarEdicao = () => {
        definirEdicaoHabilitada(false)
        definirItemEditado(item)
        definirItens(itens => [...itens])
    }

    const salvarEdicao = () => {
        definirItens(listaAtual => [...listaAtual.map((itemDaLista, indiceDoItem) => indiceDoItem === indice ? itemEditado : itemDaLista)])
        definirEdicaoHabilitada(false)
    }
    return (
        <div className='item'>
            <input
                ref={inputRef}
                onChange={(e) => definirItemEditado(e.target.value)}
                value={edicaoHabilitada ? itemEditado : item}
                disabled={!edicaoHabilitada}
                className={`item__conteudo ${edicaoHabilitada && 'item__conteudo--input-habilitado'}`}
                type="text"
            />

            {edicaoHabilitada ? (
                <>
                    <button onClick={salvarEdicao} className='item__botao-salvar'>Salvar</button>
                    <button onClick={cancelarEdicao} className='item__botao-cancelar'>Cancelar</button>
                </>
            ) : (
                <>
                    <button onClick={ativarEdicao} className='item__botao-editar'>Editar</button>
                    <button onClick={apagarItem} className='item__botao-apagar'>Apagar</button>
                </>
            )}            
        </div>
    )
}

export default Item