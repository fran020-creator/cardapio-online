import React from "react";

function Carrinho({ itens, total, removerDoCarrinho, finalizarPedido }) {
  return (
    <aside className="carrinho">
      <h2>Carrinho</h2>
      {itens.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          <ul>
            {itens.map((item, idx) => {
              const quantidade = item.quantidade || 1;
              const subtotal = item.preco * quantidade;
              return (
                <li key={idx} className="carrinho-item">
                  <div className="item-info">
                    <span className="item-nome">{item.nome} {quantidade > 1 && `x${quantidade}`}</span>
                    <span className="item-preco">R${subtotal.toFixed(2)}</span>
                  </div>
                  <button 
                    className="btn-remover" 
                    onClick={() => removerDoCarrinho(idx)}
                    title="Remover item"
                  >
                    ×
                  </button>
                </li>
              );
            })}
          </ul>
          <hr />
          <div className="carrinho-footer">
            <strong>Total: R${total.toFixed(2)}</strong>
            <button 
              className="btn-finalizar" 
              onClick={finalizarPedido}
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Carrinho;