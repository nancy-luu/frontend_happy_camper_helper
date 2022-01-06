import React from "react";


export default function Header ( {handleHome} ){
    return (
        <form>
            <h1 className="header" onClick={() => handleHome()}>
                HAPPY CAMPER HELPER
            </h1>
        </form>
    )  
}