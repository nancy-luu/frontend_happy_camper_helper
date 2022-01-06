import React from "react";
import TrailForm from "./TrailForm"



// useEffect fetch specific for a season needs to be pulled down here
// {props.season_name}


export default function Trails ({ items, seasonSelected, trails}){

    // console.log(trails)
    
    let filteredItems = items.filter((i) => i.season_id === seasonSelected)


    return (
        <div className="trailContainer">
            {filteredItems.map((item) => <TrailForm key={item.id} item={item} trails={trails}/>)}
        </div>
    )  
}   