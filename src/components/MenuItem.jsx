function MenuItem({nome,descricao,preco,imagem}){
    return(
        <div className="menu-item">
            <img src={imagem} alt={nome}/>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R${typeof preco ==="number" ? preco.toFixed(2):"Preço não encontrado"}</p>
        </div>
    );
}
export default MenuItem;