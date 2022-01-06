import React from "react";
import TrailForm from "./TrailForm"



// useEffect fetch specific for a season needs to be pulled down here
// {props.season_name}


export default function Trails ({ items, seasonSelected, trails}){

    // console.log(trails)
    // let itemTrailId = item.trail_id
    
    let filteredItems = items.filter((i) => i.season_id === seasonSelected)

    // console.log(itemTrailId)
    let filteredTrail = filteredItems.map((i) => trails.find((trail) => trail.id === i.trail_id))

    console.log(trails)

    let uniqueFilteredTrail = [...new Map(filteredTrail.map((trail) => [trail["trail_name"], trail])).values()]

    console.log(uniqueFilteredTrail)

    return (
        <div className="trailContainer">
            {<TrailForm key={items.id} item={items} trails={uniqueFilteredTrail}/>}
        </div>
    )  
}   