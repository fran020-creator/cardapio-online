function MenuItem({nome,descricao,preco,imagem}){
    return(
        <div>
            <img src={imagem} alt={nome}style={{width:400,height:400}}/>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R${typeof preco ==="number" ? preco.toFixed(2):"Preço não encontrado"}</p>

        </div>
    );
}
export default MenuItem;