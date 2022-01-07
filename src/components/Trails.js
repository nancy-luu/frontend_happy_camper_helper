import React from "react";
import TrailForm from "./TrailForm"


export default function Trails ({ items, seasonSelected, trails}){

    let filteredItems = items.filter((i) => i.season_id === seasonSelected)

    let filteredTrail = filteredItems.map((i) => trails.find((trail) => trail.id === i.trail_id))

    console.log(trails)

    let uniqueFilteredTrail = [...new Map(filteredTrail.map((trail) => [trail["trail_name"], trail])).values()]

    console.log(uniqueFilteredTrail)

    return (
        <>
            <div className="trailContainer">
                {<TrailForm key={items.id} item={items} trails={uniqueFilteredTrail}/>}
            </div>
        </>
    )  
}   

