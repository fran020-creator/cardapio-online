import menu from "../data/menuData";
import MenuItem from "./MenuItem";




function Menu() {
    return(
        <div>
            <h2>Cardápio</h2>
            <div style={{display: "grid",
            gridTemplateColumns: "1fr 1fr", gap:20}}>
                {menu.map(item=>(
                    <MenuItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );    
}

export default Menu;