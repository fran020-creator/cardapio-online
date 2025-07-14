import menu from "../data/menuData";
import MenuItem from "./MenuItem";




function Menu() {
    return(
        <div>
            <div style={{ display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: 4,
                rowGap: 8}}>
                {menu.map(item=>(
                    <MenuItem key={item.id} {...item}/>
                ))}
                
            </div>
        </div>
    );    
}

export default Menu;