import React from "react";
import ItemCard from './ItemCard'


export default function MyList ( {addedItems, handleAddItem, handleBuyItem} ){


    return (
        <div >
            {addedItems.map((item) => <ItemCard key={item.id} item={item} handleAddItem={handleAddItem} handleBuyItem={handleBuyItem}/>)}
        </div>
    )   
}