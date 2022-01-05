import React from "react";
import ItemCard from './ItemCard'


export default function MyList ( {items, setMyItems, myListItems } ){


    return (
        <div >
            {myListItems.map((item) => 
                <ItemCard key={item.id} item={item} />
            )}
        </div>
    )  
}