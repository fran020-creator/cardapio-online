<<<<<<< HEAD
function MenuItem({ nome, descricao, preco, imagem }) {
    return (
      <div className="menu-card">
        <img src={imagem} alt={`Foto de ${nome}`} />
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <div className="preco">R${typeof preco === "number" ? preco.toFixed(2) : "Preço não encontrado"}</div>
      </div>
    );
  }
  export default MenuItem;
=======
function getIcon(icon) {
  switch (icon) {
    case "vegetariano":
      return <img className="icone" src="/vegetarian.png" alt="Vegetariano" title="Vegetariano" />;
    case "sem_gluten":
      return <img className="icone" src="/gluten.png" alt="Sem Glúten" title="Sem Glúten" />;
    case "picante":
      return <img className="icone" src="/icone_picante.svg" alt="Picante" title="Picante" />;
    default:
      return null;
  }
}

function MenuItem({ nome, descricao, preco, imagem, icones = [], adicionarAoCarrinho }) {
  return (
    <div className="menu-item">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <div className="icones">
        {icones.map((icon) => getIcon(icon))}
      </div>
      <div className="descricao">{descricao}</div>
      <span className="preco-badge">R${typeof preco === "number" ? preco.toFixed(2) : "Preço não encontrado"}</span>
      <button className="btn-pedir" onClick={() => adicionarAoCarrinho({ nome, preco })}>
        Adicionar ao pedido
      </button>
    </div>
  );
}



export default MenuItem;
>>>>>>> guia_visual
