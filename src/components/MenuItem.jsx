function MenuItem({nome,descricao,preco,imagem}){
    return(
        <div class="divimg">
            <img src={imagem} alt={nome}style={{width:150,height:150}}/>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R${typeof preco ==="number" ? preco.toFixed(2):"Preço não encontrado"}</p>

        </div>
    );
}
export default MenuItem;