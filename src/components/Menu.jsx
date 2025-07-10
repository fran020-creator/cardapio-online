import menu from "../data/menuData";
import MenuItem from "./MenuItem";

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
}

export default Menu;