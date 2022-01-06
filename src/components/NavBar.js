import React from "react";

// save the state for which season is clicked
// trigger a function that renders all the items for that season

export default function NavBar ({ handleMyList, handleNewItem, handleFall, handleWinter, handleSpring, handleSummer }){

    return (
        <>
            <nav className ="nav">
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={() => handleMyList()}>MY LIST</button> 
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={() => handleNewItem()}>NEW ITEM</button> 
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleFall}>FALL</button> 
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleWinter}>WINTER</button>    
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleSpring}>SPRING</button> 
                <button type="button" className="btn btn-success" style={{fontSize: 20}} onClick={handleSummer}>SUMMER</button>   
            </nav>
        </>
    )
}





