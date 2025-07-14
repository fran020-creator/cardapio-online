function MenuItem({nome,descricao,preco,imagem}){
    return(
        <div class="div-img">
            <img src={imagem} alt={nome}style={{width:120,height:120}}/>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <button class="preco-btn">R${typeof preco=== "number"? preco.toFixed(2):"preco nao encontrado"}    </button>

        </div>
    );
}
export default MenuItem;