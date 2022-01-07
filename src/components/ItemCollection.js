import React from "react";
import ItemCard from './ItemCard'


export default function ItemCollection ({ items, seasonSelected, handleAddItem, handleBuyItem }){
    
    let filteredItems = items.filter((i) => i.season_id === seasonSelected)

    return (
        <div className="itemCollection">
            {filteredItems.map((item) => <ItemCard key={item.id} item={item} handleAddItem={handleAddItem} handleBuyItem={handleBuyItem}/>)}
        </div>
    )  
}   