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