import menu from "../data/menuData";
import MenuItem from "./MenuItem";

<<<<<<< HEAD
function Menu() {
    return(
        <section>
            <h2>Cardápio</h2>
            <div className="menu-grid">
                {menu.map(item=>(<MenuItem key={item.id}{...item}/>
                ))}
            </div>
        </section>
    );    
=======
function Menu({ adicionarAoCarrinho }) {
  return (
    <div className="menu-categorias">
      {menu.map((cat) => (
        <section key={cat.categoria}>
          <h2 className="categoria-titulo">{cat.categoria}</h2>
          <div className="menu-grid">
            {cat.itens.map((item) => (
              <MenuItem key={item.id} {...item} adicionarAoCarrinho={adicionarAoCarrinho} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
>>>>>>> guia_visual
}

export default Menu;