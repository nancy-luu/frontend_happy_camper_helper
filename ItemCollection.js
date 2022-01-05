import React from "react";
import ItemCard from './ItemCard'


// useEffect fetch specific for a season needs to be pulled down here
// {props.season_name}


export default function ItemCollection ({ items, seasonSelected, handleAddItem }){
    
    let filteredItems = items.filter((i) => i.season_id === seasonSelected)

    return (
        <div >
            {filteredItems.map((item) => <ItemCard key={item.id} item={item} handleAddItem={handleAddItem}/>)}
        </div>
    )  
}   